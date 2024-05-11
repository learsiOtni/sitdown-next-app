import { fetchWrapper } from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../auth/authSlice";


export interface Project {
    id: number;
    body: string;
    createdAt: string;
    teamMembers: any[];
    title: string;
    user: any;
    updates: any;
    editable: boolean;
}


export interface ProjectsState {
    projects: Project[];
    status: Status;
    error: string | undefined;
}

const initialState: ProjectsState = {
    projects: [],
    status: "idle",
    error: ""
}

export const fetchProjects = createAsyncThunk(
    "/projects/fetchProjects",
    async () => {

        console.log('here at fetchProjects');

        const projects = await fetchWrapper.get(
            process.env.NEXT_PUBLIC_API_URL + "projects"
        )
        return projects
    }
)

export const postProject = createAsyncThunk(
    "/projects/postProject",
    async () => {
        const projects = await fetchWrapper.get(
            process.env.NEXT_PUBLIC_API_URL + "projects"
        )
        return projects
    }
)

// postProjects

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.projects = state.projects.concat(action.payload)
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const {} = projectsSlice.actions

export default projectsSlice.reducer