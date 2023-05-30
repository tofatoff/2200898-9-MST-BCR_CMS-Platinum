import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/signIn/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});