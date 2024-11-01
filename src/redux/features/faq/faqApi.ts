import { TApiResponse } from '@/types';
import { baseApi } from '../api/baseApi';
interface TFaq {
      _id: string;
      question: string;
      answer: string;
}
const faqApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllFaq: build.query({
                  query: () => {
                        return {
                              url: `/faqs`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['faqs'],
                  transformResponse: (response: TApiResponse<TFaq[]>) => {
                        return response.data;
                  },
            }),
            getSingleFaq: build.query({
                  query: (id) => {
                        return {
                              url: `/faqs/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['faqs'],
            }),
            createFaq: build.mutation({
                  query: (data) => {
                        return {
                              url: '/faqs',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['faqs'],
            }),
            updateFaq: build.mutation({
                  query: (args) => {
                        return {
                              url: `/faqs/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['faqs'],
            }),
            deleteFaq: build.mutation({
                  query: (id) => {
                        return {
                              url: `/faqs/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['faqs'],
            }),
      }),
});

export const {
      useGetAllFaqQuery,
      useCreateFaqMutation,
      useDeleteFaqMutation,
      useGetSingleFaqQuery,
      useUpdateFaqMutation,
} = faqApi;