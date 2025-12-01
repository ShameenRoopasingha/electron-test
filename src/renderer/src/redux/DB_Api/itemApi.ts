import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseItemResultType } from '../../validation/item'

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllItems: builder.query<BaseItemResultType[], void>({
      queryFn: async () => {
        const res = await window.api.item.getAll()

        if (res.success) return { data: res.data }
        return { error: { message: res.message } }
      }
    })
  })
})

export const { useGetAllItemsQuery } = itemApi
