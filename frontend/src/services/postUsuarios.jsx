import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:3003',
    }),

    endpoints:(builder)=>({
        getAllPost: builder.query({
            query:()=>({
                url: 'usuarios',
                method: 'GET'
            })
        })
    })
});

export const { useGetAllPostQuery } = postApi