import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [],
  },
  reducers: { 
    setTodos: (state, action) => {
      state.value = action.payload;
    },
    addTodo: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      fetch("http://localhost:3001/tasks/addTask", {
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
    removeTodo: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((todo) => todo.name !== action.payload);
      fetch("http://localhost:3001/tasks/deleteTask/" + action.payload, {
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

export const { addTodo,  removeTodo, setTodos } = todoSlice.actions;
export const selectTodos = (state) => state.tasks.value;
export default todoSlice.reducer;
