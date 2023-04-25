export interface IAuthProps {
    loading: boolean
    setLogin: (value: string) => void
    setPassword: (value: string) => void

    navigate: (to: string) => void
}

export interface IRegisterProps extends IAuthProps {
    setName: (value: string) => void
    setRepeatPassword: (value: string) => void,
    setEmail: (value: string) => void
}
