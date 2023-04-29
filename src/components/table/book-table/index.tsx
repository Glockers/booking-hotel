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

const User: TypeUser = {
    id: faker.datatype.number(),
    name: faker.name.firstName("male"),
    role: ROLES.ADMIN,
    email: faker.internet.email(),
    login: faker.internet.userName(),
    password: faker.internet.password()
}
const room: IRoom =  {
    id: faker.datatype.number(),
    class: TYPE_CLASS_ROOM.STANDARD,
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


const TableBook = () => {
    const [dataSource, setDataSource] = useState<IBookRoom[]>([]);
    const { showMessage } = useNotificationContext();
    useEffect(() => {
        console.log("Загрузка с сервера...", dataFromServer)
        setDataSource(dataFromServer)
    }, [])


    const deleteHandler = (data: IBookRoom) => {
        console.log("Удаляем бронь",data)
        showMessage("Бронирование номера было удалено!", "success")
    }
    const updateHandler = (oldData: IBookRoom, newData: IBookRoom) => {
        console.log("Обновляем бронь", oldData, newData)
        showMessage("Информация о бронировании номера было изменено!", "success")
    }
    const saveHandler = (data: IBookRoom) => {
        console.log("Добавляем бронь", data)
        showMessage("Информация о бронировании добавлена!", "success")
    }

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
            <TableFactory {...prepareProps}/>
        </>
    );
};

export default TableBook;