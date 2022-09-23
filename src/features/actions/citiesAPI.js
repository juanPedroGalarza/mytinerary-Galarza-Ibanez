import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";


export const citiesAPI = createApi({
    reducerPath: "citiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: ({ name, order,country }) => `/cities/?city=${name}&order=${order}&country=${country}`,
            transformResponse: res=> res.response
            }),
        postOneCity: builder.mutation({
            query: (data) => ({
                url: "/cities/",
                method: "POST",
                body: data,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
            }),
        editOneCity: builder.mutation({
            query: ({id,data}) => ({
                url: `/cities/${id}`,
                method: "PUT",
                body: data,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
        }),
        getOneCity: builder.query({
            query: (id) => `/cities/${id}`,
            transformResponse: res => res.response
        }),
        getAllCitiesBase: builder.query({
            query: () => `/cities/`,
            transformResponse: res => res.response
            }),
        getACity: builder.mutation({
            query: (id)=>`/cities/${id}`,
            transformResponse: res => res.response
        }),
    })
})

export const {
    useGetAllCitiesQuery,
    usePostOneCityMutation,
    useEditOneCityMutation,
    useGetOneCityQuery,
    useGetACityMutation,
    useGetAllCitiesBaseQuery
} = citiesAPI