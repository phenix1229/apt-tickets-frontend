import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUsers: (state, action) => {
            state.users = action.payload;
            window.sessionStorage.setItem("users", JSON.stringify(action.payload))
        }
    }
})

export const {setUsers} = usersSlice.actions;

export default usersSlice.reducer;