import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
  endpoints: (builder) => ({
    getAllusers: builder.query({
      query: () =>'/',
    }),
    adduser:builder.mutation({
        query:(user)=>({
            url:'/',
            method:'POST',
            body:user,
        }),
    }),
  }),
})

export const { useGetAllusersQuery,useAdduserMutation,useLazyGetAllusersQuery} = usersApi