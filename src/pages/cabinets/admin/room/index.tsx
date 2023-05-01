import React, {useEffect, useState} from 'react';
import {IRoom} from "../../../../common/dto";
import {Button, InputNumber, Select} from "antd";
import useNotification from "../../../../utils/hooks/notification";
import TableRoom from "../../../../components/table/room-table";
import {columns} from "./config";
import {Typography} from "@mui/material";
import styled from "styled-components";
import {$api, axiosPublic} from "../../../../utils/axios";

import {Simulate} from "react-dom/test-utils";
import {useNotificationContext} from "../../../../utils/context/notificationContext";
import {TYPE_CLASS_ROOM} from "../../../../common/enum";

// const dataFromServer: IRoom[] = [
//     {
//         id: 1,
//         room_class: TYPE_CLASS_ROOM.STANDARD,
//         count_place: 3,
//         price: parseFloat(faker.commerce.price()),
//     },
//     {
//         id: 2,
//         room_class: TYPE_CLASS_ROOM.LUX,
//         count_place: 3,
//         price: parseFloat(faker.commerce.price()),
//     },
// ]

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

const RoomPage = () => {
    const [dataSource, setDataSource] = useState<IRoom[]>([]);
    const [formData, setFormData] = useState<IRoom>({} as IRoom);
    const {showMessage} = useNotificationContext();

    useEffect(() => {
        try {
            // console.log("Загрузка с сервера...", dataFromServer)
            $api.get<IRoom[]>("/api/room/getAll")
                .then(value => {
                    console.log("[GET]", )
                    setDataSource(value.data)
                    showMessage("Данные загружены", "success");
                }).catch(error => console.error(error))
        } catch (e) {
            showMessage("Произошла ошибка при загрузке данных", "error");
        }

    }, [])

    const handleAdd = async () => {
        const data = {
            count_place: formData.count_place,
            roomClass: formData.roomClass,
            price: formData.price,
        }

        await $api.post("/api/room/addRoom", data)
            .then(value => {
                showMessage("Информация о номера была добавлена.", "success")
                console.log(value.data)
                setDataSource((prevData) => {
                    return [...prevData, value.data];
                });
            }).catch(error => console.error(error))
    }

    const handleInputChange: any = (value: any, name: string) => {
        setFormData({...formData, [name]: value});
    }

    const handleCalculatePrice = () => {
        const x = formData.roomClass === TYPE_CLASS_ROOM.STANDARD ? 1 : formData.roomClass === TYPE_CLASS_ROOM.PREMIUM ? 2 : 3
        setFormData({...formData, price: parseFloat((formData.price * x * 0.13 * formData.count_place).toFixed(2))});
    }
    return (
        <>
            <WrapperAction>
                <Button onClick={handleAdd}> Добавить </Button>
            </WrapperAction>
            <WrapperContent>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Количество мест в комнате
                    </Typography>
                    <InputNumber value={formData.count_place}
                                 style={{width: "100%"}}
                                 min={1}
                                 max={9999999999}
                                 onChange={(value) => handleInputChange(value, "count_place")}
                                 placeholder={"Количество мест"}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Выберите класс номера
                    </Typography>
                    <Select
                        value={formData.roomClass}
                        style={{width: "auto"}}
                        onChange={(value) => handleInputChange(value, "roomClass")}
                        options={[
                            {value: TYPE_CLASS_ROOM.STANDARD, label: 'Стандарт'},
                            {value: TYPE_CLASS_ROOM.PREMIUM, label: 'Премиум'},
                            {value: TYPE_CLASS_ROOM.LUX, label: 'Люкс'},

                        ]}

                    />
                </ElementWrapper>
                <ElementWrapper>
                    <WrapperPrice>
                        <Typography fontWeight={"bold"}>
                            Стоимость номера
                        </Typography>
                        <Button onClick={handleCalculatePrice}>Высчитать автоматически</Button>

                    </WrapperPrice>
                    <InputNumber value={formData.price}
                                 style={{width: "100%"}}
                                 min={1}
                                 max={9999999999}
                                 onChange={(value) => handleInputChange(value, "price")}
                                 placeholder={"Стоимость номера"}/>
                </ElementWrapper>
            </WrapperContent>

            <TableRoom<IRoom> setDataSource={setDataSource} columns={columns} dataSource={dataSource}
                              showMessage={showMessage}/>
        </>

    );
};

export default RoomPage;