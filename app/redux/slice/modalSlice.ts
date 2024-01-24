import { createSlice } from "@reduxjs/toolkit"


interface ModalState {
    registerModal: boolean;
    loginModal: boolean;
    listingModal:boolean;
};

const initialState: ModalState = {
    registerModal: false,
    loginModal: false,
    listingModal: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        modalBtnClck: (state, action) => {
           switch (action.payload) {
            case 'register':
            state.registerModal = !state.registerModal
                break;
            case 'login':
            state.loginModal = !state.loginModal
                break;
            case 'listing':
            state.listingModal = !state.listingModal
                break;
           }
        },
    }
});

export const {modalBtnClck} = modalSlice.actions
export default modalSlice.reducer