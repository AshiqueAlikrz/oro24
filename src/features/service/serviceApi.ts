import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetServicesByCategoryRequest = {
  ServiceMasterID: number;
  PageNumber: number;
  PageSize: number;
};

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVICE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("X-App-Id", "KYCTY");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllServices: builder.query<any, void>({
      query: () => "/public/Services/GetServiceMaster",
      transformResponse: (response: string) => {
        try {
          return JSON.parse(response);
        } catch {
          return response;
        }
      },
    }),
    getServicesByCategory: builder.query<any, GetServicesByCategoryRequest>({
      query: (payload) => ({
        url: "/public/Services/GetMasterServices",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: string) => {
        try {
          return JSON.parse(response);
        } catch {
          return response;
        }
      },
    }),

    getServiceDetails: builder.query<any, { ServiceID: number }>({
      query: (payload) => ({
        url: "/public/Services/GetServiceDetails",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: string) => {
        try {
          return JSON.parse(response);
        } catch {
          return response;
        }
      },
    }),
  }),
});

export const { useGetAllServicesQuery, useGetServicesByCategoryQuery } = serviceApi;
