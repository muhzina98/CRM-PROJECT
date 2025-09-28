import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import customerReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
  },
});

export default store;
