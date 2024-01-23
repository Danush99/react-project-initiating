import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import studentReducer from "./student/studentSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;