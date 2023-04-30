import React, {useEffect, useState} from 'react';
import {Button, Input, InputNumber, Space} from 'antd';
import {IServices} from "../types";
import {useNotificationContext} from "../../../utils/context/notificationContext";
import {$api} from "../../../utils/axios";
import {IPropsTableCRUD} from "../../../common/types/crud-operation";
import {columns} from "../../../pages/cabinets/admin/services/config";
import {Typography} from "@mui/material";
import {CSVLink} from "react-csv";
import TableFactory from "../table-factory";
import styled from "styled-components";

const WrapperContent = styled.div`
  display: flex;
  background-color: white;
  padding: 30px;
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

const TableService: React.FC = () => {
    const [dataSource, setDataSource] = useState<IServices[]>([]);
    const [name, setName] = useState<any>("");
    const [price, setPrice] = useState<any>();
    const [duration, setDuration] = useState<any>();
    const {showMessage} = useNotificationContext();

    useEffect(() => {
        try {
            $api.get<IServices[]>("/api/service/getAll")
                .then(value => {
                    console.log(value.data)
                    setDataSource(value.data)
                    showMessage("Данные загружены", "success");
                }).catch(error => console.error(error))
        } catch (e) {
            showMessage("Произошла ошибка при загрузке данных", "error");
        }
    }, [])

    const saveHandler = () => {
        const data: Omit<IServices, "id"> = {
            duration,
            price,
            name
        }

        $api.post("/api/service/update", data)
            .then(response => {
                showMessage("Услуга была добавлена.", "success")
                console.log(response.data)
                setDataSource((prevData) => {
                    return [...prevData, response.data];
                });
            }).catch(error => console.error(error))
    }

    const handlePriceChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event);
    };

    const handleDurationChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(event);
    };

    function updateHandler(data: IServices) {
        $api.put("/api/service/update", data)
            .then(value => {
                showMessage("Информация о услуге была изменена", "success")
            }).catch(error => console.error(error))
    }

    async function deleteHandler(data: IServices) {
        console.log(data);
        await $api.post("/api/service/delete", data)
            .then(value => {
                showMessage("Услуга была удалена!", "success")
            }).catch(error => console.error(error))
    }

    const prepareProps: IPropsTableCRUD<IServices> = {
        saveHandler,
        updateHandler,
        deleteHandler,
        dataSource,
        setDataSource,
        columns,
    }
    return (
        <>
            <WrapperAction>
                <Button onClick={saveHandler}> Добавить </Button>
            </WrapperAction>
            <WrapperContent>

                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Название услуги
                    </Typography>

                    <Input style={{width: "100%"}} placeholder="Название услуги" value={name}
                           onChange={value => setName(value.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Стоимость услуги
                    </Typography>
                    <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handlePriceChange}
                                 placeholder={"Стоимость услуги"}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Продолжительность услуги
                    </Typography>
                    <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handleDurationChange}
                                 placeholder={"Продолжительность услуги"}/>
                </ElementWrapper>
            </WrapperContent>

            <Space style={{marginBottom: 16}}>
                <Button type="primary">
                    <CSVLink filename={"Услуги"} data={dataSource}>Экспортировать</CSVLink>
                </Button>
            </Space>


            <TableFactory<IServices> {...prepareProps}/>
        </>
    )
}

export default TableService;