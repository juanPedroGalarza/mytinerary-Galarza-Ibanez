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
            query: (id) => `/itineraries/?city=${id}`
            }),
        getItinerariesUsers: builder.query({
            query: (id) => `/itineraries/?auth=${id}`
            }),
        modifyItinerary: builder.mutation({
            query: (itinerary) =>({
            url: `/itineraries/${itinerary._id}`,
            method:'PATCH',
            body: itinerary
                })
            }),
        deleteItinerary: builder.mutation({
            query: (itinerary) =>({
                url: `/itineraries/${itinerary._id}`,
                method:'DELETE',
                body: itinerary
                })
            })
})})

export const {useGetAllItinerariesQuery,useGetItinerariesUsersQuery,useDeleteItineraryMutation,useModifyItineraryMutation } = itinerariesAPI
