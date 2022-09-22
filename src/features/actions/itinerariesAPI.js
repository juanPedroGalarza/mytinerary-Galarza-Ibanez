import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
    endpoints: (builder)=>({
        postItinerary: builder.mutation({
            query: (data) =>({
            url: "/itineraries",
            method:'POST',
            body: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
                }
                })
            }),
        getAllItineraries: builder.query({
            query: () => `/itineraries/`
            }),
        getCityItineraries: builder.query({
            query: (id) => (`/itineraries/?city=${id}`),
            transformResponse: res => res.response
            }),
        getItinerariesUsers: builder.mutation({
            query: () =>({ 
                url:`/itineraries/auth`,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    }
            }),
            transformResponse: res => res.response
            }),
        modifyItinerary: builder.mutation({
            query: ({id,data}) =>({
            url: `/itineraries/${id}`,
            method:'PATCH',
            body: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
                }
                })
            }),
        deleteItinerary: builder.mutation({
            query: (id) =>({
                url: `/itineraries/${id}`,
                method:'DELETE',
                })
            }),
            likeItinerary: builder.mutation({
                query: (id) =>({
                    url: `/itineraries/like/${id}`,
                    method:'PATCH',
                    headers:{ "Authorization": "Bearer " + localStorage.getItem("token")}
                    })
                }),
            })
})

export const {
                useGetAllItinerariesQuery,
                useGetItinerariesUsersMutation,
                useDeleteItineraryMutation,
                useModifyItineraryMutation,
                useGetCityItinerariesQuery,
                usePostItineraryMutation, 
                useLikeItineraryMutation } = itinerariesAPI
