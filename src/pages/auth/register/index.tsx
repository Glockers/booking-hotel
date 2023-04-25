import React, {FC, memo} from 'react';
import styled from 'styled-components'
import {Button, TextField, Typography} from '@mui/material'
import AppLoadingButton from "../../../components/buttons/loading-buttons";
import {IRegisterProps} from "../../../common/types/AuthTypes";

const Span = styled.span`
  color: blue;
  margin-left: 10px;
  cursor: pointer;
`

const RegisterPage: FC<IRegisterProps> = memo((props: IRegisterProps): JSX.Element => {
    const {setPassword, setRepeatPassword, setEmail, setLogin, setName, navigate, loading} = props
    return (
        <>
            <Typography variant='h3' padding={3} textAlign={'center'}>
                Регистрация
            </Typography>
            <TextField
                fullWidth={true}
                margin={'normal'}
                label='Логин'
                variant='outlined'
                placeholder={'Введите логин'}
                onChange={(event) => setLogin(event.target.value)}
            />
            <TextField
                fullWidth={true}
                margin={'normal'}
                label='Имя'
                variant='outlined'
                placeholder={'Укажите имя'}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                fullWidth={true}
                margin={'normal'}
                label='Почта'
                variant='outlined'
                placeholder={'Укажите почту'}
                onChange={(event) => setEmail(event.target.value)}
            />
            {/*<TextField*/}
            {/*    fullWidth={true}*/}
            {/*    margin={'normal'}*/}
            {/*    label='Логин'*/}
            {/*    variant='outlined'*/}
            {/*    placeholder={'Введите логин'}*/}
            {/*    onChange={(event) => setLogin(event.target.value)}*/}
            {/*/>*/}
            <TextField
                type={'password'}
                fullWidth={true}
                margin={'normal'}
                label='Пароль'
                variant='outlined'
                placeholder={'Введите пароль'}
                onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
                type={'password'}
                fullWidth={true}
                margin={'normal'}
                label='Повторный пароль'
                variant='outlined'
                placeholder={'Повторите пароль'}
                onChange={(event) => setRepeatPassword(event.target.value)}
            />
            <AppLoadingButton
                loading={loading}
                type={'submit'}
                sx={{marginTop: 2, marginBottom: 2, width: '60%'}}
                variant='contained'
            >
                Зарегистрироваться
            </AppLoadingButton>
            <Typography variant='body1' sx={{}}>
                У вас уже есть аккаунт?
                <Span onClick={() => navigate('/login')}>Авторизация</Span>
            </Typography>
        </>
    )
})

export default RegisterPage;