import { baseApi } from '../api/baseApi';

const authApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            loginAdmin: build.mutation({
                  query: (data) => {
                        return {
                              url: '/login',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useLoginAdminMutation } = authApi;
