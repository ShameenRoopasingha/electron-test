const { getPrisma } = require('./lib/utils')

async function checkDatabase() {
  const prisma = getPrisma()

  try {
    console.log('🔍 Checking Database Status...\n')

    // Test connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')

    // Count records in each table
    const [
      userCount,
      billCount,
      customerCount,
      itemCount,
      categoryCount
    ] = await Promise.all([
      prisma.user.count(),
      prisma.bill.count(),
      prisma.customer.count(),
      prisma.item.count(),
      prisma.category.count()
    ])

    console.log('\n📊 Database Record Counts:')
    console.log(`   👥 Users: ${userCount}`)
    console.log(`   🧾 Bills: ${billCount}`)
    console.log(`   👤 Customers: ${customerCount}`)
    console.log(`   📦 Items: ${itemCount}`)
    console.log(`   📂 Categories: ${categoryCount}`)

    // Show sample data if exists
    if (userCount > 0) {
      const users = await prisma.user.findMany({
        take: 2,
        select: { id: true, username: true, role: true, fname: true, lname: true }
      })
      console.log('\n👥 Sample Users:')
      users.forEach(user => {
        console.log(`   - ${user.fname} ${user.lname} (${user.username}) - ${user.role}`)
      })
    }

    if (billCount > 0) {
      const bills = await prisma.bill.findMany({
        take: 2,
        select: {
          id: true,
          totalAmount: true,
          paymentMethod: true,
          paymentStatus: true,
          createdAt: true
        }
      })
      console.log('\n🧾 Sample Bills:')
      bills.forEach(bill => {
        console.log(`   - Bill #${bill.id}: $${bill.totalAmount} (${bill.paymentMethod}) - ${bill.paymentStatus}`)
      })
    }

    console.log('\n🎉 Database check complete!')

  } catch (error) {
    console.error('❌ Database check failed:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

checkDatabase()