import { fetchWrapper } from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CookieValueTypes } from "cookies-next";
import { SliceStatus, Update } from "../updates/updatesSlice";
import { User } from "../auth/authSlice";

export type NewProject = {
  title: string;
  body: string;
  teamMembers: any[];
};

export type PostDBProps<T> = {
  body: T;
  token: CookieValueTypes;
  userInfo: {
    firstname: string;
    lastname: string;
    image?: string;
  };
  id?: string;
};

export type DeleteDBProps = {
    id: string; 
    token: CookieValueTypes;
}

export interface Project {
  id: string;
  body: string;
  createdAt: string;
  teamMembers: Array<string>;
  title: string;
  user: {
    id: string,
    firstname: string,
    lastname: string,
  };
  updates?: Update;
  editable: boolean;
}

export interface ProjectsState {
  projects: Project[];
  status: SliceStatus;
  errors: { [x: string]: string } | undefined;
  teamMembers: Array<User>
}

const initialState: ProjectsState = {
  projects: [],
  status: "idle",
  errors: {},
  teamMembers: []
};

export const fetchProjects = createAsyncThunk(
  "/projects/fetchProjects",
  async ( param, { rejectWithValue }
  ) => {
    const projects = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}projects`
    );

    if (projects.error) return rejectWithValue(projects)
    return projects;
  }
);

export const postProject = createAsyncThunk(
  "/projects/postProject",
  async (
    { body, token, userInfo }: PostDBProps<NewProject>,
    { rejectWithValue }
  ) => {
    const project = await fetchWrapper.post(
      `${process.env.NEXT_PUBLIC_API_URL}projects`,
      body,
      token
    );

    if (!project.id) return rejectWithValue(project);
    return { ...project, user: userInfo };
  }
);

export const editProject = createAsyncThunk(
    "/projects/editProject",
    async (
      { body, token, userInfo, id }: PostDBProps<NewProject>,
      { rejectWithValue }
    ) => {
      const project = await fetchWrapper.post(
        `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
        body,
        token
      );
  
      if (!project.id) return rejectWithValue(project);
      return { ...project, user: userInfo };
    }
  );

// For populating Select Team Members Menu, 
export const getUsers = createAsyncThunk(
  "/projects/getUsers",
  async (param, { rejectWithValue }) => {
    const users = await fetchWrapper.get(
      `${process.env.NEXT_PUBLIC_API_URL}users`
    );
    
    if (users.error) return rejectWithValue(users)
    return users;
  }
);

export const deleteProject = createAsyncThunk(
    "/project/deleteProject",
    async (
      { id, token }: DeleteDBProps,
      { rejectWithValue }
    ) => {
      const message = await fetchWrapper.delete(
        `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
        null,
        token
      );
      
      if (message.error) return rejectWithValue(message);
      return { id, message };
    }
  );

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setStatus: (state, action: { payload: SliceStatus }) => {
      state.status = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "fetchSucceeded";
        state.projects = state.projects.concat(action.payload);
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.error.message as any;
      })

      .addCase(postProject.pending, (state) => {
        state.errors = {};
        state.status = "loading";
      })
      .addCase(postProject.fulfilled, (state, action) => {
        state.status = "postSucceeded";
        state.projects.unshift(action.payload);
        state.errors = {};
      })
      .addCase(postProject.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      })

      .addCase(editProject.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(editProject.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.projects.findIndex(
          (project) => project.id === action.payload.id
        );
        console.log(index);
        state.status = "editSucceeded";
        state.projects[index] = action.payload;
        state.errors = {};
      })
      .addCase(editProject.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      })

      .addCase(getUsers.pending, (state) => {
        state.errors = {};
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "fetchSucceeded";
        state.teamMembers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      })

      .addCase(deleteProject.pending, (state, action) => {
        state.status = "loading";
        state.errors = {};
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        const indexToDelete = state.projects.findIndex(
          (project) => project.id === action.payload.id
        );

        state.projects.splice(indexToDelete, 1);
        state.status = "deleteSucceeded";
        state.errors = {};
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload as any;
      });
  },
});

export const { setStatus, clearErrors } = projectsSlice.actions;

export default projectsSlice.reducer;
