import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from "../../store/store";
import {ROLES} from "../role";
export interface IRepositoryStateAuth {
    user: IUserAuth,
    isLogged: boolean,
    isLoading: boolean
}


export interface IUserAuth {
    id?: number,
    login?: string,
    name?: string,
    email?: string,
    password?: string
    role?:ROLES
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector