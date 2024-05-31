import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CookieValueTypes, deleteCookie, setCookie } from 'cookies-next';
import { fetchWrapper } from '@/util/fetchWrapper';

// minified user
export type MinUser = {
    id: string,
    firstname: string,
    lastname: string,
    image?: string
}

export type User = {
    id: string,
    email: string,
    firstname: string,
    lastname: string,
    createdAt: string,
    image?: string,
    projects?: string[],
    updates?: string[],
}

export interface UserLogin {
    email: string
    password: string
}

export interface UserSignup extends UserLogin {
    confirmPassword: string
    firstname: string
    lastname: string
}

export interface AuthState {
    isAuth: boolean;
    credentials: {
        token: string,
        user: User
    };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    errors: { [x: string]: string};
}

const initialState: AuthState = {
    isAuth: false,
    credentials: {
        token: '',
        user: {
            id: '',
            email: '',
            firstname: '',
            lastname: '',
            createdAt: '',
            image: ''
        }
    },
    status: 'idle',
    errors: {}
}

export const login = createAsyncThunk(
  "/login",
  async ({userData, isSignup}: { userData: UserLogin | UserSignup, isSignup?: boolean }, { rejectWithValue }) => {

    let url = `${process.env.NEXT_PUBLIC_API_URL}login`;
    if (isSignup) url = `${process.env.NEXT_PUBLIC_API_URL}signup`

    const data = await fetchWrapper.post(url, userData);

    // if there's no token, login is unsuccessful, and will return an object with list of errors
    if (!data.token) return rejectWithValue(data);

    //set localStorage, cookies expires in one hour since FB token's life is only one hour
    setCookie("authToken", data.token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });
    
    return data;
  }
);

export const getAuthUser = createAsyncThunk(
  "/getAuthUser",
  async (token: CookieValueTypes, { rejectWithValue }) => {
    const user = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}user`,
      undefined,
      token
    );

    if (user.error) return rejectWithValue(user.error);
    return user;
  }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuth = true
        },
        setProfileImage: (state, action) => {
            state.credentials.user.image = action.payload
        },
        setCredentials: (state, action) => {
            state.credentials.user = action.payload
            state.isAuth = true
        },
        clearErrors: (state) => {
            state.errors = {}
        },
        logout: (state) => {
            deleteCookie('authToken');
            // delete headers authorization?
            return initialState; 
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.errors = {};
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuth = true;
                state.credentials.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.errors = action.payload as any;
            })

            .addCase(getAuthUser.pending, (state, action) => {
                state.errors = {};
                state.status = 'loading';
            })
            .addCase(getAuthUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.credentials.user = action.payload;
                state.isAuth = true;
            })
            .addCase(getAuthUser.rejected, (state, action) => {
                state.status = 'failed';
                state.errors = action.error.message as any;
            })
    }
});

export const { setAuth, setCredentials, clearErrors, logout, setProfileImage } = authSlice.actions;
export default authSlice.reducer;
