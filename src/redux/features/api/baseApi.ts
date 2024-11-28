import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
      // http://localhost:3000/
      // https://covevalleyorganics.com/api/
      endpoints: () => ({}),
      tagTypes: ['products', 'faqs', 'blogs', 'supports'],
});
