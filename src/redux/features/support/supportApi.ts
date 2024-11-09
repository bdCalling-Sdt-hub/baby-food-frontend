import { baseApi } from '../api/baseApi';

const supportApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getSupport: build.query({
                  query: () => {
                        return {
                              url: `/supports`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['supports'],
                  transformResponse: (response: any) => {
                        return response.data[0];
                  },
            }),

            createSupport: build.mutation({
                  query: (data) => {
                        return {
                              url: '/supports',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['supports'],
            }),
            updateSupport: build.mutation({
                  query: (args) => {
                        return {
                              url: `/supports/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['supports'],
            }),
      }),
});

export const { useCreateSupportMutation, useGetSupportQuery, useUpdateSupportMutation } = supportApi;
