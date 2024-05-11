import { createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { fetchWrapper } from '@/util/fetchWrapper';
import { useAppSelector } from '@/lib/hooks';
import { useSelector } from 'react-redux';

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface AuthState {
    isAuth: boolean;
    credentials: {
        token: string,
        user: {
            email?: string,
            firstname?: string,
            lastname?: string,
            image?: string,
            id: string,
        }
    };
    status: Status,
    errors: { [x: string]: string};
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

const initialState: AuthState = {
    isAuth: false,
    credentials: {
        token: '',
        user: {}
    },
    status: 'idle',
    errors: {} as any
}

export const login = createAsyncThunk(
  "/login",
  async (userData: UserLogin, { rejectWithValue }) => {
    const data = await fetchWrapper.post(
      process.env.NEXT_PUBLIC_API_URL + "login",
      userData
    );

    // if there's no token, login is unsuccessful, and will return an object with list of errors
    if (!data.token) return rejectWithValue(data);

    //set localStorage, cookies expires in one hour since FB token's life is only one hour
    setCookie("authToken", data.token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });

    return data;
  }
);

export const signup = createAsyncThunk(
  "/signup",
  async (userData: UserSignup, { rejectWithValue }) => {
    const data = await fetchWrapper.post(
      process.env.NEXT_PUBLIC_API_URL + "signup",
      userData
    );

    if (!data.token) return rejectWithValue(data);

    setCookie("authToken", data.token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });

    return data;
  }
);

export const getAuthUser = createAsyncThunk(
  "/getAuthUser",
  async (token: string, { rejectWithValue }) => {
    const user = await fetchWrapper.get(
      process.env.NEXT_PUBLIC_API_URL + "user",
      undefined,
      token
    );

    if (user.error) return rejectWithValue(user.error);

    return user;
  }
);

// actual slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuth = true
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
                state.errors = {},
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuth = true
                state.credentials.token = action.payload.token
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.errors = action.payload as any;
            })

            .addCase(signup.pending, (state, action) => {
                state.errors = {},
                state.status = 'loading'
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuth = true
                state.credentials.token = action.payload.token
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.errors = action.payload as any;
            })

            .addCase(getAuthUser.pending, (state, action) => {
                state.errors = {},
                state.status = 'loading'
            })
            .addCase(getAuthUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.credentials.user = action.payload
                state.isAuth = true
            })
            .addCase(getAuthUser.rejected, (state, action) => {
                state.status = 'failed';
                state.errors = action.error.message as any
            })
    }
});

export const { setAuth, setCredentials, clearErrors, logout } = authSlice.actions;

export const isAuth = (state:RootState) => state.auth.isAuth
export default authSlice.reducer;
