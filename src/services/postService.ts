import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostI } from '../models/PostI'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<PostI[], number>({
            query: (limit: number) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createNewPost: build.mutation<PostI, PostI>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<PostI, PostI>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<PostI, PostI>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post']
        })
    })
})

