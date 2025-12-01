const { getPrisma } = require('./lib/utils')

async function testDatabaseConnection() {
  console.log('🧪 Testing Database Connection...\n')

  try {
    const prisma = getPrisma()

    // Test connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')

    // Check existing data
    const userCount = await prisma.user.count()
    const billCount = await prisma.bill.count()
    const customerCount = await prisma.customer.count()

    console.log('\n📊 Database Status:')
    console.log(`   Users: ${userCount}`)
    console.log(`   Bills: ${billCount}`)
    console.log(`   Customers: ${customerCount}`)

    // Test a simple query
    if (userCount > 0) {
      const users = await prisma.user.findMany({ take: 1, select: { id: true, username: true } })
      console.log('\n✅ Can query users:', users)
    }

    if (billCount > 0) {
      const bills = await prisma.bill.findMany({ take: 1, select: { id: true, totalAmount: true } })
      console.log('✅ Can query bills:', bills)
    }

    console.log('\n🎉 Database and basic queries working!')

  } catch (error) {
    console.error('❌ Database test failed:', error.message)
  }
}

testDatabaseConnection()