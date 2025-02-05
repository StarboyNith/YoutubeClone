import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Features/todo/homeSlice"

 const store = configureStore({
    reducer:{
        sidebarReducer,        
    }
})

export default store