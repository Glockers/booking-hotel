import React, {FC, memo, useState} from 'react'
import {useLocation} from 'react-router-dom'

import styled from 'styled-components'

import RegisterPage from "./register/index.jsx";
import {useNavigate} from "react-router";
import LoginPage from "./login";
import {loginUser, registerUser} from "../../store/thunks/auth";
import {useAppDispatch, useAppSelector} from "../../common/types/store";
import {useNotificationContext} from "../../utils/context/notificationContext";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .form {
    width: 80%;
  }
`

const DispatcherStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 640px;
  margin: auto;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 5px 5px 10px #ccc;
`

const AuthRootComponent: FC = memo((): JSX.Element => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {showMessage} = useNotificationContext();

    const location = useLocation()
    const navigate = useNavigate()

    // Redux
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.auth.isLoading)
    const dataLoginUser = {
        login,
        password,
    }

    const dataRegisterUser = {
        login,
        password,
        name,
        email,
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        if (location.pathname === '/login') {
            try {
                await dispatch(loginUser(dataLoginUser));
                showMessage("Вы успешно авторизовались", "success")
            } catch (e: any) {
                navigate("/login");
                throw new Error(e)
            }
        } else if (location.pathname === '/reg') {
            try {
                await dispatch(registerUser(dataRegisterUser))
                navigate("/reg");
                showMessage("Вы успешно зарегистрировались", "success")
            } catch (e: any) {
                console.error(e)
            }

        } else {
            throw new Error('Ошибка')
        }
    }
    return (
        <>
            <Root>
                <form className={'form'} onSubmit={handleSubmit}>
                    <DispatcherStyle>
                        {location.pathname === '/login' ? (
                            <LoginPage
                                setLogin={setLogin}
                                setPassword={setPassword}
                                navigate={navigate}
                                loading={loading}
                            />
                        ) : location.pathname === '/reg' ? (
                            <RegisterPage
                                setLogin={setLogin}
                                setPassword={setPassword}
                                setRepeatPassword={setRepeatPassword}
                                setName={setName}
                                setEmail={setEmail}
                                navigate={navigate}
                                loading={loading}
                            />
                        ) : null}
                    </DispatcherStyle>
                </form>
            </Root>
        </>
    )
})

export default AuthRootComponent
