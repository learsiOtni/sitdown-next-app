import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";

const UPDATES_URL = "http://127.0.0.1:5001/sitdown-834fc/us-central1/api/updates";

export interface UpdatesState {
    updates: any[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed', 
    error: string | undefined,
    value: number
}

const initialState: UpdatesState = {
    updates: [],
    status: 'idle',
    error: '',
    value: 0
}

export const fetchUpdates = createAsyncThunk('/updates/fetchUpdates', async () => {
    const res = await fetch(UPDATES_URL);
     if (!res.ok) {
        // return error state
     }

     return await res.json();
})

export const updatesSlice = createSlice({
    name: 'updates',
    initialState,
    reducers: {
        getUpdates(state, action) {
            return state
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUpdates.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUpdates.fulfilled, (state, action) => {
                state.status = 'succeeded'

                state.updates = state.updates.concat(action.payload)
            })
            .addCase(fetchUpdates.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
});

export const selectAllUpdates = (state: RootState) => state.updates;

export const { getUpdates } = updatesSlice.actions;

export default updatesSlice.reducer;