import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const citiesAPI = createApi({
    reducerPath: "citiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (search)=>{ 
                console.log(search)
                if (search) {
                    return `/cities/?city=${search}`
                    }
            return '/cities'
            }}),

    })
})

export const {useGetAllCitiesQuery, useGetFilterCitiesQuery} = citiesAPI