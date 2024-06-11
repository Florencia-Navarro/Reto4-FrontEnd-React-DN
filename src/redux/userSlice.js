import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '', 
    username: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            const{ name, email, username, password } = action.payload
            state.name = name;
            state.email = email;
            state.username = username;
            state.password = password
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer