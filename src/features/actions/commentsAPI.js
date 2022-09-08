import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
        endpoints: (builder)=>({
            //Por ahora no.
            createComment: builder.mutation({
                query: (comment) =>({
                url: `/comments`,
                method:'POST',
                body: comment
                    })
                }),

            // getAllComments: builder.query({
            //     query: () => `/comments/`
            //     }),
            //No es necesario de momento.
            getComment: builder.query({
                query: (id) => `/comments/${id}`
                }),

            getItinerariesComment: builder.query({
                query: (id) => `/comments/?itinerary=${id}`
                    }),
                    
            modifyComment: builder.mutation({
                query: (id,data) =>({
                url: `/comments/${id}`,
                method:'PATCH',
                body: data
                    })
                }),

            deleteComment: builder.mutation({
                query: (id) =>({
                    url: `/comment/${id}`,
                    method:'DELETE'
                    })
                })
        })
    })

export const {useCreateCommentMutation,useGetAllCommentsQuery, useDeleteCommentMutation, useModifyCommentMutation,useGetItinerariesCommentQuery} = commentsAPI
