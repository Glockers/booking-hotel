import {createAsyncThunk} from '@reduxjs/toolkit'

import {axiosPublic} from "../../../utils/axios";
import {IUserAuth} from "../../../common/types/auth";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: IUserAuth, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post('api/auth/login', data)
            sessionStorage.setItem('token', response.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(response.data.user))
            return response.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                throw error
            }
        }
    },
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IUserAuth, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post('api/auth/register', data)
            console.log(response)
            return response.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
