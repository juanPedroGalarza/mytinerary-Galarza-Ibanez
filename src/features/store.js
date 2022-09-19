import {configureStore} from "@reduxjs/toolkit"
import { activitiesAPI } from "./actions/activitiesAPI"
import { citiesAPI } from "./actions/citiesAPI"
import { commentsAPI } from "./actions/commentsAPI"
import { itinerariesAPI } from "./actions/itinerariesAPI"
import { usersAPI } from "./actions/usersAPI"

export const store = configureStore({
    reducer:{

            cities: citiesAPI,
            [citiesAPI.reducerPath] : citiesAPI.reducer,
            itineraries: itinerariesAPI,
            [itinerariesAPI.reducerPath]: itinerariesAPI.reducer,    
            comments: commentsAPI,
            [commentsAPI.reducerPath]: commentsAPI.reducer,
            activities: activitiesAPI,
            [activitiesAPI.reducerPath]: activitiesAPI.reducer, 
            users: usersAPI,
            [usersAPI.reducerPath]: usersAPI.reducer,
        
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(citiesAPI.middleware,
            itinerariesAPI.middleware,
            commentsAPI.middleware,
            activitiesAPI.middleware,
            usersAPI.middleware)
})


