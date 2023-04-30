import React, {useEffect, useState} from 'react';
import {IBookRoom, ITableProps} from "../../../../components/table/types";
import useNotification from "../../../../utils/hooks/notification";
import TableBook from "../../../../components/table/book-table";
import {columns} from "../../../../components/table/book-table/config";
import {TYPE_CLASS_ROOM} from "../../../../common/enum/room-class";
import {faker} from "@faker-js/faker";
import {ENUM_ROOM_FREEDOM} from "../../../../common/enum/room";
import {ENUM_RESERVATION} from "../../../../common/enum/book";
import {ROLES} from "../../../../common/role";
import {IUserAuth} from "../../../../common/types/IStore";
import {CRUDOperation} from "../../../../common/types/crud-operation";
import {useNotificationContext} from "../../../../utils/context/notificationContext";





//
// interface IPropsReservation extends ITableProps<IBookRoom>, CRUDOperation<IBookRoom> {
//
// }
//

const ReservationPage: React.FC = () => {
    // const [dataSource, setDataSource] = useState<IBookRoom[]>([]);
    // const [formData, setFormData] = useState<IBookRoom>({} as IBookRoom);
    // const { showMessage } = useNotificationContext();
    //
    // useEffect(() => {
    //     console.log("Загрузка с сервера...", dataFromServer)
    //     setDataSource(dataFromServer)
    // }, [])
    //
    //
    // const deleteHandler = (data: IBookRoom) => {
    //     console.log("Удаляем бронь",data)
    // }
    // const updateHandler = (oldData: IBookRoom, newData: IBookRoom) => {
    //     console.log("Обновляем бронь", oldData, newData)
    //
    // }
    // const saveHandler = (data: IBookRoom) => {
    //     console.log("Добавляем бронь", data)
    // }
    //
    // const prepareProps: IPropsReservation = {
    //     saveHandler,
    //     updateHandler,
    //     deleteHandler,
    //     columns,
    //     dataSource,
    //     setDataSource,
    //     showMessage,
    // }


    return (
        <>
            <TableBook/>
        </>


    );
};

export default ReservationPage;