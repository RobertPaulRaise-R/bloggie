import { BLOGS_URL } from "../constants";
import { apiSlice } from "./ApiSlice";

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({ url: BLOGS_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPostsQuery } = blogsApiSlice;
