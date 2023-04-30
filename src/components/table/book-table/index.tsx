import React, {useEffect, useState} from 'react';
import {IBookRoom, IRoom, TypeUser} from "../types";
import {IPropsTableCRUD} from "../../../common/types/crud-operation";
import TableFactory from "../table-factory";
import {columns} from "./config";
import {TYPE_CLASS_ROOM} from "../../../common/enum/room-class";
import {faker} from "@faker-js/faker";
import {ENUM_ROOM_FREEDOM} from "../../../common/enum/room";
import {ENUM_RESERVATION} from "../../../common/enum/book";
import {ROLES} from "../../../common/role";
import {useNotificationContext} from "../../../utils/context/notificationContext";
import {Button, DatePicker, InputNumber, Select, Space} from "antd";
import styled from "styled-components";
import {Typography} from "@mui/material";
import type {DatePickerProps, RangePickerProps} from 'antd/es/date-picker';
import {IUser} from "../../../common/types/IStore";
// import set from "lodash/set";

const {RangePicker} = DatePicker;

type HandleInputChangeType = (
    value: any,
    name: string
) => void;

const User: TypeUser = {
    id: faker.datatype.number(),
    name: faker.name.firstName("male"),
    role: ROLES.ADMIN,
    email: faker.internet.email(),
    login: faker.internet.userName(),
    password: faker.internet.password()
}
const room: IRoom = {
    id: faker.datatype.number(),
    roomClass: TYPE_CLASS_ROOM.STANDARD,
    price: parseFloat(faker.commerce.price()),
    count_place: 3,
    status: ENUM_ROOM_FREEDOM.BOOKED
}
const dataFromServer: IBookRoom[] = [
    {
        id: 1,
        room,
        endDate: new Date(faker.date.past()),
        startDate: new Date(faker.date.future()),
        status: ENUM_RESERVATION.UNPAID,
        guestsCount: 3,
        user: User,
    },
    {
        id: 2,
        room,
        endDate: new Date(faker.date.past()),
        startDate: new Date(faker.date.future()),
        status: ENUM_RESERVATION.PAID,
        guestsCount: 2,
        user: User
    }
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


const TableBook = () => {
    const [dataSource, setDataSource] = useState<IBookRoom[]>([]);
    const {showMessage} = useNotificationContext();
    const [formData, setFormData] = useState<IBookRoom>({} as IBookRoom);

    useEffect(() => {
        console.log("Загрузка данных с сервера...", dataFromServer)
        setDataSource(dataFromServer)
    }, [])

    useEffect(() => {
        console.log("formData: ", formData)
        console.log("dataSource: ", dataSource)
    }, [formData])

    const deleteHandler = (data: IBookRoom) => {
        console.log("Удаляем бронь", data)
        showMessage("Бронирование номера было удалено!", "success")
    }
    const updateHandler = (oldData: IBookRoom, newData: IBookRoom) => {
        console.log("Обновляем бронь", oldData, newData)
        showMessage("Информация о бронировании номера было изменено!", "success")
    }
    const saveHandler = (data: IBookRoom) => {
        try {
            console.log("Добавляем бронь", data)

            setDataSource((prevData) => {
                data.id = faker.datatype.number()
                console.log(data)
                return [...prevData, data];
            });
        }catch (e){
            showMessage("Ошибка!", "error")
        }

        showMessage("Информация о бронировании добавлена!", "success")
    }


    const handleInputChange: HandleInputChangeType = (value, name) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,

        }));
    };

    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {

            setFormData({
                ...formData,
                endDate: new Date(dateString[1]),
                startDate: new Date(dateString[0])
            });


    };

    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    const prepareProps: IPropsTableCRUD<IBookRoom> = {
        saveHandler,
        updateHandler,
        deleteHandler,
        dataSource,
        columns,
        setDataSource,
    }

    return (
        <>
            <WrapperAction>
                <Button onClick={() => saveHandler(formData)}> Добавить </Button>
            </WrapperAction>

            <WrapperContent>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        ID Клиента
                    </Typography>
                    <InputNumber value={formData.user?.id}
                                 onChange={(value) => handleInputChange(value, "user.id")}
                                 placeholder={"ID Клиента"}
                                 min={1}
                                 max={9999999999}
                                 style={{width: "100%"}}
                    />
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Выберите номер комнаты
                    </Typography>
                    <InputNumber value={formData.room?.id}
                                 onChange={(value) => handleInputChange(value, "room.id")}
                                 placeholder={"Номер комнаты"}
                                 min={1}
                                 max={9999999999}
                                 style={{width: "100%"}}
                    />
                </ElementWrapper>


                <ElementWrapper>
                    <WrapperPrice>
                        <Typography fontWeight={"bold"}>
                            Количество людей
                        </Typography>
                    </WrapperPrice>
                    <InputNumber value={formData.guestsCount}
                                 onChange={(value) => handleInputChange(value, "guestsCount")}
                                 placeholder={"Количество людей"}
                                 min={1}
                                 max={9999999999}
                                 style={{width: "100%"}}
                    />
                </ElementWrapper>


                <ElementWrapper>
                    <WrapperPrice>
                        <Typography fontWeight={"bold"}>
                            Дата бронирования
                        </Typography>
                    </WrapperPrice>
                    <Space direction="vertical" size={12}>
                        {/*<DatePicker showTime onChange={onChange} onOk={onOk} />*/}
                        <RangePicker
                            showTime={{format: 'HH:mm'}}
                            // format="YYYY-MM-DD HH:mm"
                            onChange={onChange}
                            // onOk={onOk}
                        />
                    </Space>
                </ElementWrapper>

            </WrapperContent>
            <TableFactory {...prepareProps}/>
        </>
    );
};

export default TableBook;