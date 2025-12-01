// columns.ts
import { createColumnHelper } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'

export type Item = {
  itemCode: string
  name: string
  category: string
  packSize: number
  boxQty: number
  looseQty: number
  totalStock: number
  retailPrice: number
  expiryDate: string
  supplierName: string
  lastRestocked: string
  availableForSale: boolean
  lowStock: boolean
}

const columnHelper = createColumnHelper<Item>()

export const itemColumns = [
  columnHelper.accessor('itemCode', {
    header: 'Item Code',
    enableSorting: true
  }),

  columnHelper.accessor('name', {
    header: 'Name / Description',
    enableSorting: true
  }),

  columnHelper.accessor('category', {
    header: 'Category',
    enableSorting: true
  }),

  columnHelper.accessor('packSize', {
    header: 'Pack Size',
    enableSorting: true
  }),

  columnHelper.accessor('boxQty', {
    header: 'Box Quantity',
    enableSorting: true
  }),

  columnHelper.accessor('looseQty', {
    header: 'Loose Quantity',
    enableSorting: true
  }),

  columnHelper.accessor('totalStock', {
    header: 'Total Stock',
    enableSorting: true
  }),

  columnHelper.accessor('retailPrice', {
    header: 'Retail Price',
    enableSorting: true
  }),

  columnHelper.accessor('expiryDate', {
    header: 'Expiry Date',
    enableSorting: true
  }),

  columnHelper.accessor('supplierName', {
    header: 'Supplier Name',
    enableSorting: true
  }),

  columnHelper.accessor('lastRestocked', {
    header: 'Last Restocked',
    enableSorting: true
  }),

  columnHelper.accessor('availableForSale', {
    header: 'Available For Sale',
    enableSorting: true,
    cell: (info) => (info.getValue() ? 'true' : 'false')
  }),

  columnHelper.accessor('lowStock', {
    header: 'Low Stock',
    enableSorting: true,
    cell: (info) => (info.getValue() ? 'true' : 'false')
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Action',
    cell: () => (
      <div className="flex gap-3">
        <Pencil className="w-4 h-4 cursor-pointer text-green-500" />
        <Trash2 className="w-4 h-4 cursor-pointer text-red-500" />
      </div>
    )
  })
]
