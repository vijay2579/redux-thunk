import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./features/usersSlice";

const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
});

export default store;
