import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './ToDosSlice'
import todoReducer from './ToDoSlice'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        todosStore: todosReducer,
        todoStore: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})