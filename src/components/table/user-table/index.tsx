import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Popconfirm, Space, Table, TableProps} from 'antd';
import {EditableCellProps, IBookRoom, IEditableColumnProps, TypeItem} from "../types";
import {CSVLink} from "react-csv";
import {ROLES} from "../../../common/role";
import {faker} from "@faker-js/faker";
import {IUser} from "../../../common/types/IStore";
import TableFactory from "../table-factory";
import {useNotificationContext} from "../../../utils/context/notificationContext";




const originData: TypeItem[] = [
    {
        key: 1,
        name: 'Test',
        email: faker.internet.email(),
        login: "admin",
        role: ROLES.ADMIN
    },
    {
        key: 2,
        name: 'test',
        login: "tester",
        email: faker.internet.email(),
        role: ROLES.USER
    },
]



const UserTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<IBookRoom[]>([]);
    const {showMessage} = useNotificationContext();
    const [formData, setFormData] = useState<IBookRoom>({} as IBookRoom);

   return (
       <>
           {/*<TableFactory {...prepareProps}/>*/}
       </>
   )
};

export default UserTable;