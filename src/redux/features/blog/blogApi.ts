import { TApiResponse } from '@/types';
import { baseApi } from '../api/baseApi';
// interface TFaq {
//       _id: string;
//       question: string;
//       answer: string;
// }
const blogApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllBlog: build.query({
                  query: () => {
                        return {
                              url: `/blogs`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['blogs'],
                  transformResponse: (response: TApiResponse<Record<string, any>[]>) => {
                        return response.data;
                  },
            }),
            getSingleBlog: build.query({
                  query: (id) => {
                        return {
                              url: `/blogs/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['blogs'],
            }),
            createBlog: build.mutation({
                  query: (data) => {
                        return {
                              url: '/blogs',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
            updateBlog: build.mutation({
                  query: (args) => {
                        return {
                              url: `/blogs/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
            deleteBlog: build.mutation({
                  query: (id) => {
                        return {
                              url: `/blogs/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['blogs'],
            }),
      }),
});

export const {
      useCreateBlogMutation,
      useDeleteBlogMutation,
      useGetAllBlogQuery,
      useGetSingleBlogQuery,
      useUpdateBlogMutation,
} = blogApi;
