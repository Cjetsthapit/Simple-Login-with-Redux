import { configureStore } from "@reduxjs/toolkit";
import loginRegisterReducer from "../LoginRegister/loginRegisterSlice";
export const store = configureStore({
  reducer: {
    loginRegister: loginRegisterReducer
  },
});