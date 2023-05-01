import { createSlice } from '@reduxjs/toolkit'
import {loginUser, registerUser} from "../../thunks/auth";
import {IUserAuth} from "../../../common/types/auth";
import {IRepositoryStateAuth} from "../../../common/types/store/auth";
import {ROLES} from "../../../common/enum";


const initialState: IRepositoryStateAuth = {
    user: {} as IUserAuth,
    isLogged: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.rejected, (state) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.pending, (state) => {
            state.isLogged = false
            state.isLoading = true
        })

        builder.addCase(registerUser.rejected, (state) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state) => {
            state.isLogged = false
            state.isLoading = true
        })
    },
})
