import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";


export const citiesAPI = createApi({
    reducerPath: "citiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (search)=>`/cities/?city=${search}`
            }),
        
    })
})

export const {useGetAllCitiesQuery, useGetFilterCitiesQuery} = citiesAPI