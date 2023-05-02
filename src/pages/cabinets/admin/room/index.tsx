import React, {useEffect, useState} from 'react';
import {IRoom} from "../../../../common/dto";
import {Button, Input, InputNumber, Select} from "antd";
import TableRoom from "../../../../components/table/room-table";
import {columns} from "./config";
import {Typography} from "@mui/material";
import styled from "styled-components";
import {$api} from "../../../../utils/axios";
import {useNotificationContext} from "../../../../utils/context/notificationContext";
import {TYPE_CLASS_ROOM} from "../../../../common/enum";
import {Title} from 'common/style/header';


const WrapperContent = styled.div`
  display: flex;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  flex-wrap: wrap;
  gap: 10px;
  margin: 50px 0;
`

const WrapperAction = styled.div`
  display: flex;
`
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(33.33% - 10px); /* 10px для учета отступов между элементами */

`

const WrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header = styled.h1`
  margin-bottom: 20px;
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
                    console.log("[GET]",)
                    setDataSource(value.data)
                    showMessage("Данные загружены", "success");
                }).catch(error => console.error(error))
        } catch (e) {
            showMessage("Произошла ошибка при загрузке данных", "error");
        }

    }, [])

    const handleAdd = async () => {
        const data: Omit<IRoom, "id"> = {
            count_place: formData.count_place,
            roomClass: formData.roomClass,
            price: formData.price,
            description_room: formData.description_room,
            title_room: formData.title_room,
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
        console.log(value)
        setFormData({...formData, [name]: value});
    }

    const handleCalculatePrice = () => {
        const x = formData.roomClass === TYPE_CLASS_ROOM.STANDARD ? 1 : formData.roomClass === TYPE_CLASS_ROOM.PREMIUM ? 2 : 3
        setFormData({...formData, price: parseFloat((formData.price * x * 0.13 * formData.count_place).toFixed(2))});
    }
    return (
        <>
            <Title>Управление номерами</Title>
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
                    <Typography fontWeight={"bold"}>
                        Введите описание номера
                    </Typography>
                    <Input placeholder='Описание номера'
                           onChange={(value) => handleInputChange(value.target.value, "description_room")}
                    />
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Введите название номера
                    </Typography>
                    <Input
                        placeholder='Название номера'
                        onChange={(value) => handleInputChange(value.target.value, "title_room")}
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