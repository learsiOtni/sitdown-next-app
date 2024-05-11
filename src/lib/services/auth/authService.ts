import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from 'cookies-next'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: (headers, { getState}) => {
            const token = getCookie('authToken')

            if (token) {
                // include token in req header
                headers.set('authorization', `Bearer ${token}`)  
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getAuthenticatedUser: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET'
            })
        })
    })
})

export const { useGetAuthenticatedUserQuery } = authApi