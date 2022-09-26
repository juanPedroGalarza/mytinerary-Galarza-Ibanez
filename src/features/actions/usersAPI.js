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
            query: (user, token) =>({
                url: "/auth/signin",
                method: "POST",
                body: user,
                headers: {"Authorization": "Bearer " + token}
            }), 
            }),
        userSignOut: builder.mutation({
            query: (user) => ({
                url: "/auth/signout",
                method: "POST",
                body: user
            })
        }),
        verifyToken: builder.mutation({
            query: (token)=>({
                url: "/auth/token",
                headers: {"Authorization": "Bearer " + token}
                })
            }),
            editUser: builder.mutation({
                query: (data) =>({
                    url: `/auth/`,
                    method:"PUT",
                    body:data,
                    headers: { "Authorization": "Bearer " + localStorage.getItem("token")}
                })
            }),
            getUser: builder.query({
                query: (id) => `/auth/${id}`
            })
        })
    })

    export const { 
            useUserSignUpMutation,
            useUserSignInMutation,
            useUserSignOutMutation,
            useVerifyTokenMutation,
            useEditUserMutation,
            useGetUserQuery
        } = usersAPI