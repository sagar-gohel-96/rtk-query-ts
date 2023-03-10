import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PostPayload } from "../models/post.model";
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
    addPost: builder.mutation<void, PostPayload>({
      query: (post) => ({
        url: "/posts/create",
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updatePost: builder.mutation<void, Partial<Post>>({
      query: ({ _id, ...rest }) => ({
        url: `/posts/update/${_id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    deletePost: builder.mutation<void, string>({
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
