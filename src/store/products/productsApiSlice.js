import { apiSlice } from "../../apis/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `products?_page=${page.page}`;
        } else {
          return `products?category=${page.filter}&_page=${page.page}`;
        }
      },
      keepUnusedDataFor: 2,
      providesTags: ["Posts"],
    }),
    fetchsubcategory: builder.query({
      query: () => "subcategory",
      providesTags: ["Posts"],
    }),
    fetchOrders: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `orders?_page=${page.page}&_limit=7`;
        } else {
          return `orders?delivered=${page.filter}&_page=${page.page}&_limit=7`;
        }
      },
      providesTags: ["Posts"],
    }),
    fetchcategory: builder.query({
      query: () => "category",
      providesTags: ["Posts"],
    }),
    fetchOrdersLength: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `orders`;
        } else {
          return `orders?delivered=${page.filter}`;
        }
      },
      transformResponse: (res) => {
        return res.length;
      },
      providesTags: ["Posts"],
    }),
    createProduct: builder.mutation({
      query: (post) => ({
        url: "products",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useCreateProductMutation,
  useFetchsubcategoryQuery,
  useFetchcategoryQuery,
  useFetchOrdersQuery,
  useFetchOrdersLengthQuery,
} = productsApiSlice;
