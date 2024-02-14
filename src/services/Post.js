import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET',
            }),
        }),

        // with id 
        getPostId: builder.query({
            query: (id) => {
                console.log("ID :", id)
                return {
                    url: `posts/${id}`, // Corrected URL construction
                    method: 'GET',
                }
            }
        }),
        // with limit

        getPostByLimit: builder.query({
            query: (num) => {
                console.log("Limit Number :", num)
                return {
                    url: `posts?_limit=${num}`, // Corrected URL construction
                    method: 'GET',
                }
            }
        }),
    }),
});

export const { useGetAllPostQuery, useGetPostIdQuery, useGetPostByLimitQuery } = postApi;
