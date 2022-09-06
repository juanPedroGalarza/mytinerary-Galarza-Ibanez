import {configureStore} from "@reduxjs/toolkit"
import { citiesAPI } from "./actions/citiesAPI"

export const store = configureStore({
    reducer:{
        cities: citiesAPI,
        [citiesAPI.reducerPath] : citiesAPI.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck:false,
        serializableCheck: false,
    })

})


