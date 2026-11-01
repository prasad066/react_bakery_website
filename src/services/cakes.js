import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cakesApi = createApi({
  reducerPath: 'cakesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/cakes' }),
  endpoints: (builder) => ({
    getAllcakes: builder.query({
      query: () =>'/',
    }),
  }),
})

export const { useGetAllcakesQuery } = cakesApi