import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contactSlice";

export const store = configureStore({
  reducer: { contact: contactReducer },
});
