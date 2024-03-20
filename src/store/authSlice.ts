import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { deleteCookie, setCookie } from 'cookies-next';
import { fetchWrapper } from '@/util/fetchWrapper';

// State type
export interface AuthState {
    isAuth: boolean;
    credentials: {
        token: string
    };
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: {};
}

export interface UserLogin {
    email: string;
    password: string;
}

// initial state
const initialState: AuthState = {
    isAuth: false,
    credentials: {
        token: ''
    },
    status: 'idle',
    error: {} as any
}


export const login = createAsyncThunk('/login', async (userData: UserLogin, { rejectWithValue}) => {

    try {
        const data = await fetchWrapper.post('http://127.0.0.1:5001/sitdown-834fc/us-central1/api/login', userData);

        if (data.error) return rejectWithValue(data);

        //set localStorage 
        setCookie('authToken', data.token)

        return data;
    } catch (e: any) {
        return rejectWithValue(e.response.data)
    }    
})

// actual slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state = action.payload
        },
        logout: () => {

            deleteCookie('authToken');
            // delete headers authorization?
            return initialState; 
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.error = {},
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuth = true
                state.credentials.token = action.payload.token
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as any;
            })
    }
});


export const { setAuth, logout } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth.isAuth;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthToken = (state: RootState) => state.auth.credentials.token;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
