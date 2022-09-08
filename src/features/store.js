import {configureStore} from "@reduxjs/toolkit"
import { activitiesAPI } from "./actions/activitiesAPI"
import { citiesAPI } from "./actions/citiesAPI"
import { commentsAPI } from "./actions/commentsAPI"
import { itinerariesAPI } from "./actions/itinerariesAPI"


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
        
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        })
})


