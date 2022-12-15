import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    post: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { usePostsQuery, usePostQuery } = postApi;
