import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: 'api',

  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),

  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    getProduct: builder.query({
        query: () => `productall`,
      }),
   
  }),

});
export const {  useGetProductQuery } = api;