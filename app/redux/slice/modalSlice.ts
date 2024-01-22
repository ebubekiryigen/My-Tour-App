import { createSlice } from "@reduxjs/toolkit"


interface ModalState {
    registerModal: boolean
    loginModal: boolean
}

const initialState: ModalState = {
    registerModal: false,
    loginModal: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        modalBtnClck: (state, action) => {
            action.payload == 'register' ? state.registerModal = !state.registerModal : state.loginModal = !state.loginModal
        },
    }
})

export const {modalBtnClck} = modalSlice.actions
export default modalSlice.reducer