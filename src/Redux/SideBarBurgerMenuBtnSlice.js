
import { createSlice } from '@reduxjs/toolkit'

const burgerMenuSlice = createSlice({
    name: 'sideBarBurgerBtn' ,
    initialState: {
        isOpen : localStorage.getItem('isOpen') != undefined ?  localStorage.getItem('isOpen') : false
    },
    reducers: {
        toggleState : (state,action) => {
            localStorage.setItem('isOpen',!state.isOpen)
            state.isOpen = !state.isOpen
        }

    }
})

export const {toggleState} = burgerMenuSlice.actions
export default burgerMenuSlice.reducer