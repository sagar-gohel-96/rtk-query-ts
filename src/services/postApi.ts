import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";
export interface ApiResponse<T> {
  data: T;
  success: boolean;
}
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<ApiResponse<Post[]>, void>({
      query: () => "/posts",
    }),
    post: builder.query<ApiResponse<Post>, string>({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.mutation<void, Post>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: JSON.stringify(post),
      }),
    }),
    updatePost: builder.mutation<void, Post>({
      query: ({ _id, ...rest }) => ({
        url: `/posts/${_id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
