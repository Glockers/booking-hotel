import {IUserAuth} from "../../auth";

export interface IRepositoryStateAuth {
    user: IUserAuth,
    isLogged: boolean,
    isLoading: boolean
}