import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goals",
  initialState: {
    value: [],
  },
  reducers: {
    setGoals: (state, action) => {
      state.value = action.payload;
    },
    addGoal: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      fetch("http://localhost:3001/goals/addGoal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "123",
        },
        body: JSON.stringify(action.payload),
      }).catch((err) => {
        console.log(err);
      });
    },
    removeGoal: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((goal) => goal.name !== action.payload);
      fetch("http://localhost:3001/goals/deleteGoal/" + action.payload, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "123",
        },
      }).catch((err) => {
        console.log(err);
      });
    },
  },
});

export const { addGoal,  removeGoal, setGoals } = goalSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default goalSlice.reducer;
// 