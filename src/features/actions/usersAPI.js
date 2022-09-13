import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";


export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
        endpoints: (builder) =>({
        userSignUp: builder.mutation({
            query: (user) =>({
            url: "/auth/signup",
            method: "POST",
            body: user
                }),
        }),
        userSignIn: builder.mutation({
            query: (user) =>({
                url: "/auth/signin",
                method: "POST",
                body: user
            }),
            transformResponse: res=> res.response
            }),
        })
    })

    export const { useUserSignUpMutation, useUserSignInMutation } = usersAPI