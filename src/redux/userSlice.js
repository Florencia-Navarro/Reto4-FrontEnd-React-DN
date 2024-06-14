import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload
            state.push(user)
        },
        setUsers: (state, action) => {
            
            return action.payload
        }
    }
})

export const { addUser, setUsers } = userSlice.actions
export default userSlice.reducer