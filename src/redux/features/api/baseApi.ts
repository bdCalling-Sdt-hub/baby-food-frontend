import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'http://92.205.29.166:3000/api' }),
      endpoints: () => ({}),
      tagTypes: ['products', 'faqs', 'blogs', 'supports'],
});
