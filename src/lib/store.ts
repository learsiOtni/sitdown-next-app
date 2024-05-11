import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import updatesSlice from './features/updates/updatesSlice'
import projectsSlice from './features/projects/projectsSlice'
import { authApi } from './services/auth/authService'


export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authSlice,
            updates: updatesSlice,
            projects: projectsSlice,
            [authApi.reducerPath]: authApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware)
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']