import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
    endpoints: (builder)=>({
        // createItinerary: builder.mutation({
        //     query: (itinerary) =>({
        //     url: `/itineraries`,
        //     method:'POST',
        //     body: itinerary
        //         })
        //     }),
        // getItinerary: builder.query({
        //     query: (id) => `/itineraries/${id}`
        //     }),
        getAllItineraries: builder.query({
            query: () => `/itineraries/`
            }),
        getCityItineraries: builder.query({
            query: (id) =>(`/itineraries/?city=${id}`),
            
            }),
        getItinerariesUsers: builder.query({
            query: (id) => `/itineraries/?auth=${id}`
            }),
        modifyItinerary: builder.mutation({
            query: (id,data) =>({
            url: `/itineraries/${id}`,
            method:'PATCH',
            body: data
                })
            }),
        deleteItinerary: builder.mutation({
            query: (id) =>({
                url: `/itineraries/${id}`,
                method:'DELETE',
                })
            })
})})

export const {useGetAllItinerariesQuery,useGetItinerariesUsersQuery,useDeleteItineraryMutation,useModifyItineraryMutation, useGetCityItinerariesQuery } = itinerariesAPI
