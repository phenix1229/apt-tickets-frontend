import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets:[]
}

export const ticketsSlice = createSlice({
    name:'ticket',
    initialState,
    reducers:{
        setTickets: (state, action) => {
            state.tickets = action.payload;
            window.sessionStorage.setItem("tickets", JSON.stringify(action.payload))
        }
    }
})

export const {setTickets} = ticketsSlice.actions;

export default ticketsSlice.reducer;