import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import userReducer from './userSlice';
import { combineReducers } from "@reduxjs/toolkit";

// const combinedReducers = combineReducers({
//     auth:authReducer,
//     user:userReducer
// });

export const store = configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
