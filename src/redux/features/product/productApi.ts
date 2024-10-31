import { baseApi } from '../api/baseApi';

const productApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllProducts: build.query({
                  query: () => {
                        return {
                              url: `/products}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['products'],
            }),
            getSingleProduct: build.query({
                  query: (id) => {
                        return {
                              url: `/products/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['products'],
            }),
            createProduct: build.mutation({
                  query: (data) => {
                        return {
                              url: '/products',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['products'],
            }),
            updateProduct: build.mutation({
                  query: (args) => {
                        return {
                              url: `/products/${args.id}`,
                              method: 'PATCH',

                              body: args.data,
                        };
                  },
                  invalidatesTags: ['products'],
            }),
            deleteProduct: build.mutation({
                  query: (id) => {
                        return {
                              url: `/products/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['products'],
            }),
      }),
});

export const {
      useCreateProductMutation,
      useDeleteProductMutation,
      useGetAllProductsQuery,
      useGetSingleProductQuery,
      useUpdateProductMutation,
} = productApi;
