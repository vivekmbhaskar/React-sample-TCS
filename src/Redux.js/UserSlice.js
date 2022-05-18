import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: { savedItems: [] },
    reducers: {
        addToSaved(state, action) {
            if (!state.savedItems.includes(String(action.payload))) {
                state.savedItems = [...state.savedItems, action.payload]
            }
        },
        removeFromSaved(state, action) {
            state.savedItems = state.savedItems.filter(item => item !== String(action.payload))
        }

    }
})


export const UserSliceActions = UserSlice.actions
export default UserSlice