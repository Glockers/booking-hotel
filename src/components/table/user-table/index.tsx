import React, {useEffect, useState} from 'react';
import {IUser} from "../types";
import TableFactory from "../table-factory";
import {useNotificationContext} from "../../../utils/context/notificationContext";
import {IPropsTableCRUD} from "../../../common/types/crud-operation";
import {columns} from "./config";
import {$api} from "../../../utils/axios";
import {Button, InputNumber, Space} from "antd";
import {Typography} from "@mui/material";
import styled from "styled-components";
import {CSVLink} from "react-csv";


const WrapperContent = styled.div`
  display: flex;
  background-color: white;
  padding: 15px;
  gap: 120px;
  margin: 9px 0 50px;
  border-radius: 10px;
`

const WrapperAction = styled.div`
  display: flex;
`
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 30%;
`

const WrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const UserTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<IUser[]>([]);
    const {showMessage} = useNotificationContext();
    const [formData, setFormData] = useState<IUser>({} as IUser);

    // Загрузка данных
    useEffect(() => {
        try {
            $api.get<IUser[]>("/api/user/getAll")
                .then(value => {
                    setDataSource(value.data)
                    showMessage("Данные загружены", "success");
                }).catch(error => console.error(error))
        } catch (e) {
            showMessage("Произошла ошибка при загрузке данных", "error");
        }
    }, [])

    async function saveHandler(user: IUser) {
        const data: Omit<IUser, "id"> = {
            email: formData.email,
            name: formData.name,
            role: formData.role,
            login: formData.login
        }

        await $api.post("/api/user/addRoom", data)
            .then(value => {
                showMessage("Пользователь был добавлен.", "success")
                console.log(value.data)
                setDataSource((prevData) => {
                    return [...prevData, value.data];
                });
            }).catch(error => console.error(error))
    }

    async function deleteHandler(data: IUser) {
        await $api.post("/api/user/deleteUser", data)
            .then(value => {
                showMessage("Пользователь был удален!", "success")
            }).catch(error => console.error(error))
    }

    function updateHandler(newData: IUser) {
        console.log(newData)
        $api.put("/api/user/updateUser", newData)
            .then(value => {
                // setDataSource(prevState => {
                //     return [...prevState, value.data]
                // });
                showMessage("Информация о пользователе изменена", "success")
            }).catch(error => console.error(error))
    }

    const prepareProps: IPropsTableCRUD<IUser> = {
        saveHandler,
        updateHandler,
        deleteHandler,
        dataSource,
        setDataSource,
        columns,
    }


    return (
        <>
            <Space style={{marginBottom: 16}}>
                <Button type="primary" >
                    <CSVLink filename={"Пользователи"} data={dataSource}>Экспортировать</CSVLink>
                </Button>
            </Space>
            <TableFactory<IUser> {...prepareProps}/>
        </>
    )
};

export default UserTable;