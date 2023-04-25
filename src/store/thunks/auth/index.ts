import {createAsyncThunk} from '@reduxjs/toolkit'

import {IUser} from "../../../common/types/IStore";
import {axiosPublic} from "../../../utils/axios";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: IUser, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post('api/auth/login', data)
            sessionStorage.setItem('token', response.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(response.data.user))
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

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IUser, { rejectWithValue }) => {
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
