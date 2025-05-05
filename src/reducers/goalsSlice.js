import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
                'name': 'Graduarme de la universidad',
            }
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        }
    }
});

export const { addGoal } = todoSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default todoSlice.reducer;