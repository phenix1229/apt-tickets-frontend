import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticket:{
        openedBy:'',
        clientName:'',
        clientCell:'',
        clientPhone:'',
        clientEmail:'',
        clientLocation:'',
        assignedDepartment:'',
        description:'',
        updateComments:[]
    }
}

export const ticketSlice = createSlice({
    name:'ticket',
    initialState,
    reducers:{
        setTicket: (state, action) => {
            state.ticket = action.payload;
            window.sessionStorage.setItem("ticket", JSON.stringify(action.payload))
        }
    }
})

export const {setTicket} = ticketSlice.actions;

export default ticketSlice.reducer;