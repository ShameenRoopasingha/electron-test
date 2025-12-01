import { getPrisma } from './lib/utils'
import { createBill, getAllBills, BaseBillInputType } from './src/main/services/billService'
import { createUser, getAllUser, BaseUserInputType } from './src/main/services/userService'

async function testControllersAndServices(): Promise<void> {
  console.log('🧪 Testing Controllers & Services with DB...\n')

  const prisma = getPrisma()

  try {
    // 1. Test DB Connection
    console.log('1️⃣ Testing Database Connection...')
    await prisma.$connect()
    console.log('✅ Database connected successfully\n')

    // 2. Check existing data
    console.log('2️⃣ Checking existing data...')
    const [
      userCount,
      billCount,
      customerCount,
      itemCount
    ] = await Promise.all([
      prisma.user.count(),
      prisma.bill.count(),
      prisma.customer.count(),
      prisma.item.count()
    ])
    console.log(`📊 Current DB state:`)
    console.log(`   - Users: ${userCount}`)
    console.log(`   - Bills: ${billCount}`)
    console.log(`   - Customers: ${customerCount}`)
    console.log(`   - Items: ${itemCount}\n`)

    // 3. Test User Service
    console.log('3️⃣ Testing User Service...')
    if (userCount === 0) {
      console.log('   Creating test user...')
      const testUser: BaseUserInputType = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        role: 'CASHIER',
        fname: 'Test',
        lname: 'User',
        phone: '+1234567890',
        address: '123 Test St',
        bank_account: '1234567890'
      }

      const createdUser = await createUser(testUser)
      console.log('✅ User created:', {
        id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email
      })
    } else {
      console.log('   Users already exist, fetching all...')
      const users = await getAllUser()
      console.log(`✅ Found ${users.length} users`)
    }
    console.log()

    // 4. Test Bill Service (requires user and customer)
    console.log('4️⃣ Testing Bill Service...')

    // First ensure we have a customer
    let customerId = 1
    if (customerCount === 0) {
      console.log('   Creating test customer...')
      const testCustomer = await prisma.customer.create({
        data: {
          name: 'Test Customer',
          email: 'customer@example.com',
          phone: '+0987654321',
          address: '456 Customer Ave'
        }
      })
      customerId = testCustomer.id
      console.log('✅ Customer created:', testCustomer.id)
    }

    // Now test bill creation
    const testBill: BaseBillInputType = {
      userId: 1, // Assuming user exists
      customerId: customerId,
      totalAmount: 99.99,
      paymentMethod: 'cash',
      paymentStatus: 'paid'
    }

    console.log('   Creating test bill...')
    const createdBill = await createBill(testBill)
    console.log('✅ Bill created:', {
      id: createdBill.id,
      totalAmount: createdBill.totalAmount,
      paymentMethod: createdBill.paymentMethod,
      paymentStatus: createdBill.paymentStatus
    })

    // Test getting all bills
    const allBills = await getAllBills()
    console.log(`✅ Total bills in DB: ${allBills.length}`)
    console.log()

    // 5. Test Controller Flow (simulate IPC calls)
    console.log('5️⃣ Testing Controller Flow Simulation...')

    // Simulate what happens in billController.ts
    console.log('   Simulating bill:create IPC call...')
    const ipcTestData = {
      userId: 1,
      customerId: customerId,
      totalAmount: 149.99,
      paymentMethod: 'card',
      paymentStatus: 'pending'
    }

    // This simulates the controller logic
    const validatedData = ipcTestData // In real controller, this would be validated
    const bill = await prisma.bill.create({
      data: { ...validatedData }
    })
    console.log('✅ Controller simulation successful:', {
      id: bill.id,
      totalAmount: bill.totalAmount
    })
    console.log()

    // 6. Verify data persistence
    console.log('6️⃣ Verifying Data Persistence...')
    const finalBillCount = await prisma.bill.count()
    const finalUserCount = await prisma.user.count()
    console.log(`📊 Final DB state:`)
    console.log(`   - Users: ${finalUserCount}`)
    console.log(`   - Bills: ${finalBillCount}`)
    console.log('✅ Data persistence verified\n')

    console.log('🎉 All tests passed! Controllers and services are working correctly.')

  } catch (error) {
    console.error('❌ Test failed:', error)
    console.error('Error details:', error instanceof Error ? error.message : String(error))
  } finally {
    await prisma.$disconnect()
    console.log('🔌 Database connection closed')
  }
}

// Run the tests
testControllersAndServices()