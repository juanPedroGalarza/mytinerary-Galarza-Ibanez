import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const citiesAPI = createApi({
    reducerPath: "citiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: ()=> "/cities",
        }),
        getFilterCities: builder.query({
            query: (search)=> (
                {  
                    url: `/cities/${search.city}`,
                })
            })
    })
})

export const {useGetAllCitiesQuery, useGetFilterCitiesQuery} = citiesAPI