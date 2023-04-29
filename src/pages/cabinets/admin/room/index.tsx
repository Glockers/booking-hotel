import React, {useEffect, useState} from 'react';
import {IRoom} from "../../../../components/table/types";
import {TYPE_CLASS_ROOM} from "../../../../common/enum/room-class";
import {Button, InputNumber, Select} from "antd";
import useNotification from "../../../../utils/hooks/notification";
import TableRoom from "../../../../components/table/room-table";
import {columns} from "./config";
import {Typography} from "@mui/material";
import styled from "styled-components";
import {faker} from "@faker-js/faker";

const dataFromServer: IRoom[] = [
    {
        id: 1,
        class: TYPE_CLASS_ROOM.STANDARD,
        count_place: 3,
        price: parseFloat(faker.commerce.price()),
    },
    {
        id: 2,
        class: TYPE_CLASS_ROOM.LUX,
        count_place: 3,
        price: parseFloat(faker.commerce.price()),
    },
]

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
    const {MessageContainer, showMessage, contextHolder} = useNotification();


    useEffect(() => {
        console.log("Загрузка с сервера...", dataFromServer)
        setDataSource(dataFromServer)
    }, [])

    const handleAdd = () => {
        const data = {
            count_place: formData.count_place,
            class: formData.class,
            id: dataSource[dataSource.length - 1].id + 1,
            price: formData.price,
        }
        setDataSource((prevData) => {
            return [...prevData, data];
        });
        console.log("Отправка на сервер", data)
        showMessage("Комната добавлена", "success");
    }

    const handleInputChange: any = (value: any, name: string) => {
        // console.log(name, value)
        setFormData({ ...formData, [name]: value });
    }

    const handleCalculatePrice = ()=>{
        const x = formData.class === TYPE_CLASS_ROOM.STANDARD ? 1 : formData.class === TYPE_CLASS_ROOM.PREMIUM ? 2: 3
        setFormData({ ...formData, price: parseFloat((formData.price * x * 0.13*formData.count_place).toFixed(2))}) ;
    }
    return (
        <>
            {contextHolder}
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
                        value={formData.class}
                        style={{width: "auto"}}
                        onChange={(value) => handleInputChange(value, "class")}
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