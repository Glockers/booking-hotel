import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLogged: false,
    isLoading: false,
}


export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        test(state){
            state.isLogged = true;
            state.isLoading = true;
        }
    },
})
