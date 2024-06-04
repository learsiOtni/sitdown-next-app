import { fetchWrapper } from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteDBProps, PostDBProps } from "../projects/projectsSlice";
import { getDateIndexes, getNewDates, getNewTagsNotInCurrentTags } from "@/util/helper";

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

export type Dates = {
  id: string,
  createdAt: string,
  updates: Array<Update>
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
  errors?: { [x: string]: string };
  isModalOpen: boolean;
  updateId: string;
  dates: Array<Dates>;
  tags: Array<string>;
}

const initialState: UpdatesState = {
  updates: [],
  status: "idle",
  errors: {},
  isModalOpen: false,
  updateId: "",
  dates: [],
  tags: []
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
    return { ...rest, user: userInfo };
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
    return { ...rest, user: userInfo };
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

export const fetchUpdatesByDates = createAsyncThunk(
  "/updates/fetchUpdatesByDate",
  async (param, { rejectWithValue }) => {
    const dates = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}dates`
    );

    if (dates.error) return rejectWithValue(dates);
    return dates;
  }
);

export const fetchTags = createAsyncThunk(
  "/updates/fetchTags",
  async (param, { rejectWithValue }) => {
    const tags = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}tags`
    );

    if (tags.error) return rejectWithValue(tags);
    return tags;
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
      .addCase(fetchUpdates.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      })

      .addCase(postUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(postUpdate.fulfilled, (state, action) => {
        const newTags = getNewTagsNotInCurrentTags(action.payload.tags, state.tags);

        state.status = "postSucceeded";
        state.updates.unshift(action.payload);
        state.tags = [...state.tags, ...newTags];
        state.dates = getNewDates(action.payload, state.dates)
        state.errors = {};
      })
      .addCase(postUpdate.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      })

      .addCase(editUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(editUpdate.fulfilled, (state, action) => {
        const index = state.updates.findIndex(
          (update) => update.id === action.payload.id
        );
        const newTags = getNewTagsNotInCurrentTags(action.payload.tags, state.tags);

        const { datesIndex, updateIndex} = getDateIndexes(action.payload.id, state.dates);
        if(datesIndex !== -1) state.dates[datesIndex].updates[updateIndex] = action.payload;
        state.status = "editSucceeded";
        state.updates[index] = action.payload;
        state.tags = [...state.tags, ...newTags]
        state.errors = {};
      })
      .addCase(editUpdate.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      })

      .addCase(deleteUpdate.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(deleteUpdate.fulfilled, (state, action) => {
        const indexToDelete = state.updates.findIndex(
          update => update.id === action.payload.id
        );

        const { datesIndex, updateIndex} = getDateIndexes(action.payload.id, state.dates);
        if(datesIndex !== -1) state.dates[datesIndex].updates.splice(updateIndex, 1);

        state.updates.splice(indexToDelete, 1);
        state.status = "deleteSucceeded";
        state.errors = {};
      })
      .addCase(deleteUpdate.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      })

      .addCase(fetchUpdatesByDates.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(fetchUpdatesByDates.fulfilled, (state, action) => {
        state.status = "fetchSucceeded";
        state.dates = state.dates.concat(action.payload);
      })
      .addCase(fetchUpdatesByDates.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      })

      .addCase(fetchTags.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "fetchSucceeded";
        state.tags = state.tags.concat(action.payload);
      })
      .addCase(fetchTags.rejected, (state, action: any) => {
        state.status = "failed";
        state.errors = action.payload;
      });
  },
});

export const { setStatus, clearErrors, toggleModal, setUpdates } = updatesSlice.actions;

export default updatesSlice.reducer;