import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        role:'',
        firstName:'',
        lastName:'',
        email:'',
        cellNumber:'',
        phoneNumber:'',
        unit:'',
        department:''
    }
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            window.sessionStorage.setItem("user", JSON.stringify(action.payload))
        }
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;