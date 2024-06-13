import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            const users= action.payload
            if(Array.isArray(users)){
                state.push(...users)
            } else  {
                console.error("Expected an array of users")
            }
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer