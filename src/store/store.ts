import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { updatesSlice } from "./updatesSlice";

export const makeStore = () => { // create a store instance per request
    return configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [updatesSlice.name]: updatesSlice.reducer
        }
    })
}

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

/*export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [updatesSlice.name]: updatesSlice.reducer
    }
})*/

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;

