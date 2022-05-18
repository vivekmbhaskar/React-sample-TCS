import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store=configureStore({
    reducer:{
        UserSlice : UserSlice.reducer
    }
})

export default store;