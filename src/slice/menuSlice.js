import { createSlice } from "@reduxjs/toolkit";
import { Menu_ITEMS } from "@/constants";

const initialState = [
    { activeMenuItem: Menu_ITEMS.PENCIL },
    { actionMenuItem: null }
]

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuItemClick: (state, action) => {
            state.activeMenuItem = action.payload
        },
        actionMenuClick: (state, action) => {
            state.actionMenuItem = action.payload
        },
    },
})

export const { menuItemClick, actionMenuClick } = menuSlice.actions

export default menuSlice.reducer;