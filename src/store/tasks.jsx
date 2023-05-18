import { createSlice } from "@reduxjs/toolkit";
import { TaskView } from "@layouts/TaskView";
import { PersonsCard } from "@layouts/PersonsCard";
import { TaskEdit } from "@layouts/TaskEdit";
import { Profile } from "@layouts/Profile";

const initialState = {
    isWindow: false
};
const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        change(state, action) {
            return
            if (action.payload == "RETURN") {
                state.isWindow = false
            } else {
                state.isWindow = action.payload
            }
            // } else if (action.payload == "PersonsCard") {
            //     state.isWindow = <PersonsCard />
            // } else if (action.payload == "TaskEdit") {
            //     state.isWindow = <TaskEdit />
            // } else if (action.payload == "Profile") {
            //     state.isWindow = <Profile />
            // } else if (action.payload == "TaskView") {
            //     state.isWindow = <TaskView />
            // } else {
            //     state.isWindow = false
            // }
        },
    }
});


export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;