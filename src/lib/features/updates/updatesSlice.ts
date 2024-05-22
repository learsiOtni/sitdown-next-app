import { fetchWrapper } from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteDBProps, PostDBProps } from "../projects/projectsSlice";

export type NewUpdate = {
  title: string;
  body: string;
  tags: string[] | string;
  projectId: string;
};

export type SliceStatus =
  | "idle"
  | "loading"
  | "failed"
  | "fetchSucceeded"
  | "postSucceeded"
  | "deleteSucceeded"
  | "editSucceeded"
  | "editing";

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
    image?: string;
  };
  project?: {
    id: string;
    title: string;
  };
  lastUpdated?: string;
}

export interface UpdatesState {
  updates: Update[];
  status: SliceStatus;
  errors: { [x: string]: string } | undefined;
  isModalOpen: boolean;
  updateId: string;
}

const initialState: UpdatesState = {
  updates: [],
  status: "idle",
  errors: {},
  isModalOpen: false,
  updateId: "",
};

export const fetchUpdates = createAsyncThunk(
  "/updates/fetchUpdates",
  async ( param, { rejectWithValue }
  ) => {
    const updates = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}updates`
    );
    
    if (updates.error) return rejectWithValue(updates);
    return updates;
  }
);

export const postUpdate = createAsyncThunk(
  "/updates/postUpdate",
  async (
    { body, token, userInfo }: PostDBProps<NewUpdate>,
    { rejectWithValue }
  ) => {
    const update = await fetchWrapper.post(
      `${process.env.NEXT_PUBLIC_API_URL}updates`,
      body,
      token
    );

    if (!update.id) return rejectWithValue(update);

    // structure new update
    const { userId, ...rest } = update;
    return { ...rest, user: { id: userId, ...userInfo } };
  }
);

export const editUpdate = createAsyncThunk(
  "/updates/editUpdate",
  async (
    { body, token, userInfo, id }: PostDBProps<NewUpdate>,
    { rejectWithValue }
  ) => {
    const update = await fetchWrapper.post(
      `${process.env.NEXT_PUBLIC_API_URL}updates/${id}`,
      body,
      token
    );

    if (!update.id) return rejectWithValue(update);

    // structure edited update
    const { userId, ...rest } = update;
    return { ...rest, user: { id: userId, ...userInfo } };
  }
);

export const deleteUpdate = createAsyncThunk(
  "/updates/deleteUpdate",
  async (
    { id, token }: DeleteDBProps,
    { rejectWithValue }
  ) => {
    const message = await fetchWrapper.delete(
      `${process.env.NEXT_PUBLIC_API_URL}updates/${id}`,
      null,
      token
    );
    
    if (message.error) return rejectWithValue(message);
    return { id, message };
  }
);

export const updatesSlice = createSlice({
  name: "updates",
  initialState,
  reducers: {
    setStatus: (state, action: { payload: SliceStatus }) => {
      state.status = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {}
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setUpdates: (state, action) => {
      state.updates = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUpdates.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(fetchUpdates.fulfilled, (state, action) => {
        state.status = "fetchSucceeded";
        state.updates = state.updates.concat(action.payload);
      })
      .addCase(fetchUpdates.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.error.message as any;
      })

      .addCase(postUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(postUpdate.fulfilled, (state, action) => {
        state.status = "postSucceeded";
        state.updates.unshift(action.payload);
        state.errors = {};
      })
      .addCase(postUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      })

      .addCase(editUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(editUpdate.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.updates.findIndex(
          (update) => update.id === action.payload.id
        );
        console.log(index);
        state.status = "editSucceeded";
        state.updates[index] = action.payload;
        state.errors = {};
      })
      .addCase(editUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      })

      .addCase(deleteUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(deleteUpdate.fulfilled, (state, action) => {
        const indexToDelete = state.updates.findIndex(
          update => update.id === action.payload.id
        );

        state.updates.splice(indexToDelete, 1);
        state.status = "deleteSucceeded";
        state.errors = {};
      })
      .addCase(deleteUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      });
  },
});

export const { setStatus, clearErrors, toggleModal, setUpdates } = updatesSlice.actions;

export default updatesSlice.reducer;