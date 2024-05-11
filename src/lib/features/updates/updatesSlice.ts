import { fetchWrapper } from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../auth/authSlice";
import { CookieValueTypes } from "cookies-next";

export type NewUpdate = {
  title: string
  body: string
  tags: string
  projectId: string
}

export interface Update {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  tags: string[];
  user: {
    id: string;
    firstname: string;
    lastname: string;
  };
  project: {
    id: string;
    title: string;
  };
}

export interface UpdatesState {
  updates: Update[];
  status: Status;
  errors: { [x: string]: string} | undefined;
  value: number;
  isModalOpen: boolean;
}

const initialState: UpdatesState = {
  updates: [],
  status: "idle",
  errors: {},
  value: 0,
  isModalOpen: false
};

export const fetchUpdates = createAsyncThunk(
  "/updates/fetchUpdates",
  async () => {
    const updates = await fetchWrapper.get(
      process.env.NEXT_PUBLIC_API_URL + "updates"
    );

    return updates;
  }
);

export const postUpdate = createAsyncThunk(
  "/updates/postUpdate",
  async ({body, token} : { body: {}, token: CookieValueTypes}, {rejectWithValue}) => {
    // only can get one payload, change to
    const update = await fetchWrapper.post(
      process.env.NEXT_PUBLIC_API_URL + "updates",
      body,
      token,
    );

    if (!update.id) return rejectWithValue(update);

    return update;
  }
);

export const deleteUpdate = createAsyncThunk(
  "/updates/deleteUpdate",
  async ({updateId, token}: {updateId: string, token: CookieValueTypes}) => {

    const message = await fetchWrapper.delete(
      `${process.env.NEXT_PUBLIC_API_URL}updates/${updateId}`,
      null,
      token
    );

    return {updateId, message};
    //if (!isDeleted.message) return rejectWith
  }
)

export const updatesSlice = createSlice({
  name: "updates",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUpdates.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUpdates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updates = state.updates.concat(action.payload)
      })
      .addCase(fetchUpdates.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.error.message as any;
      })

      .addCase(postUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {}
      })
      .addCase(postUpdate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updates = state.updates.concat(action.payload)
        state.errors = {}
        state.isModalOpen = false
      })
      .addCase(postUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;;
      })

      .addCase(deleteUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {}
      })
      .addCase(deleteUpdate.fulfilled, (state, action) => {
        const indexToDelete = state.updates.findIndex(update => update.id === action.payload.updateId as any);
        state.updates.splice(indexToDelete, 1);

        state.status = "succeeded";
        state.errors = {}
      })
      .addCase(deleteUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;;
      });
  },
});

export const {toggleModal} = updatesSlice.actions;

export default updatesSlice.reducer;
