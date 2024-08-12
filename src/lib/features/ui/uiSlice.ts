import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
    alertMessage: string;
}

const initialState: UiState = {
    alertMessage: "",
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setAlertMessage: (state, action) => {
            state.alertMessage = action.payload
        }
    }
})

export const { setAlertMessage } = uiSlice.actions;

export default uiSlice.reducer;