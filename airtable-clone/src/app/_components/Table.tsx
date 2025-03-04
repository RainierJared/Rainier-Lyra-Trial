"use client"

import React, { useState } from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import testData, {defaultData} from '../test_data'

const columnHelper = createColumnHelper<testData>()

const columns = [
  columnHelper.accessor('task', {
    header: () => 'Task',
    cell: info => info.getValue(),
    
  }),
  columnHelper.accessor('due', {
    header: () => 'Due',
    cell: info => info.getValue(),
    
  }),
  columnHelper.accessor('notes', {
    header: () => 'Notes',
    cell: info => info.getValue(),
    
  }),
]

export default function Table() {
  const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel(),
  });
  return (
    <div className="p-2">
    <table className='border-2'>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th className='border-b-2' key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='border-b-2'>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="h-4" />
    <button onClick={() => rerender()} className="border p-2">
      Rerender
    </button>
  </div>
  )
}

