import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authSlice} from "./slice/auth";
import {testSlice} from "./slice/test";


const reducers = combineReducers({
    auth: authSlice.reducer,
    test: testSlice.reducer,
})

export const store = configureStore({
    reducer: reducers
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

