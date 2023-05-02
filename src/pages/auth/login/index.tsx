import React, { Fragment, memo } from 'react';
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import AppLoadingButton from "../../../components/buttons/loading-buttons";
import { IAuthProps } from "../../../common/types/auth";

const Span = styled.span`
  color: blue;
  margin-left: 10px;
  cursor: pointer;
`

const LoginPage = memo((props: IAuthProps) => {
    const { setPassword, setLogin, navigate, loading } = props;

    return (
        <Fragment>
            <Typography variant="h3" padding={3} textAlign={"center"}>
                Авторизация
            </Typography>
            <TextField fullWidth={true} margin={'normal'} label="Логин" variant="outlined"
                placeholder={"Введите логин"} onChange={(event) => setLogin(event.target.value)} />
            <TextField type={"password"} fullWidth={true} margin={'normal'} label="Пароль" variant="outlined"
                placeholder={"Введите пароль"} onChange={(event) => setPassword(event.target.value)} />

            <AppLoadingButton loading={loading} type={"submit"} sx={{ marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained" >Войти</AppLoadingButton>
            <Typography variant="body1" sx={{}}>
                У вас нет аккаунта?
                <Span onClick={() => navigate("/reg")}>Регистрация</Span>
            </Typography>
        </Fragment>
    );
});

export default LoginPage;