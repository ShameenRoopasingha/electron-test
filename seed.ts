import { createCategory } from './src/main/services/categoryService'
import { createSupplier } from './src/main/services/supplierService'
import { createItem } from './src/main/services/itemService'

async function seed() {
  try {
    // Create categories
    const category1 = await createCategory({ name: 'Electronics', description: 'Electronic items' })
    const category2 = await createCategory({ name: 'Clothing', description: 'Clothing items' })

    // Create suppliers
    const supplier1 = await createSupplier({
      name: 'Supplier A',
      email: 'supplierA@example.com',
      phone: '1234567890',
      company: 'Company A',
      address: 'Address A'
    })
    const supplier2 = await createSupplier({
      name: 'Supplier B',
      email: 'supplierB@example.com',
      phone: '0987654321',
      company: 'Company B',
      address: 'Address B'
    })

    // Create items
    await createItem({
      name: 'Laptop',
      categoryId: category1.id,
      manufacturer: 'Manufacturer X',
      supplierId: supplier1.id,
      barcode: '1234567890123',
      costPrice: 500,
      sellingPrice: 700,
      quantityInStock: 10,
      reorder_level: 5
    })

    await createItem({
      name: 'T-Shirt',
      categoryId: category2.id,
      manufacturer: 'Manufacturer Y',
      supplierId: supplier2.id,
      barcode: '9876543210987',
      costPrice: 10,
      sellingPrice: 20,
      quantityInStock: 50,
      reorder_level: 10
    })

    console.log('Seeding completed successfully')
  } catch (error) {
    console.error('Seeding failed:', error)
  }
}

seed()