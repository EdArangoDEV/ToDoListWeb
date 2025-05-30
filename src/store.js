import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import goalsReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalsReducer,
        option : optionReducer
    }
})