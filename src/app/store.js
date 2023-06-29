import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/signIn/userSlice";
import dashboardSlice from "../features/dashboard/dashboard-slice";

export default configureStore({
  reducer: {
    user: userReducer,
    dashboardStore: dashboardSlice.reducer,
  },
});
