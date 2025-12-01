// ItemsTable.tsx
'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState
} from '@tanstack/react-table'

import React, { useEffect, useState } from 'react'
import { itemColumns, Item } from './columns'

export default function ItemsTable(): React.JSX.Element {
  const [data, setData] = useState<Item[]>([])
  const [sorting, setSorting] = useState<SortingState>([])

  // Fetch data from your backend
  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, [])

  const table = useReactTable({
    data,
    columns: itemColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-[#0d0d0d]">
      <table className="w-full text-sm text-gray-200">
        <thead className="bg-[#1a1a1a] text-gray-300">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-3 py-2 text-left cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}

                    {/* Sorting icons */}
                    {header.column.getIsSorted() === 'asc'
                      ? '▲'
                      : header.column.getIsSorted() === 'desc'
                        ? '▼'
                        : ''}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-[#222]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
