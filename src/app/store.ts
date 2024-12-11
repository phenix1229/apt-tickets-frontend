import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import userReducer from './userSlice';
import ticketReducer from './ticketSlice';
import ticketsReducer from './ticketsSlice'


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    ticket: ticketReducer,
    tickets: ticketsReducer
})


export const store = configureStore({
    reducer:rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
