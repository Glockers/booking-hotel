import React from "react";
import {ROLES} from "../../../common/role";
import {ColumnProps} from "antd/es/table";
import {STATUS_APPEAL} from "../../../common/enum/appeal";
import {TYPE_CLASS_ROOM} from "../../../common/enum/room-class";
import {IUser} from "../../../common/types/IStore";
import {NoticeType} from "antd/es/message/interface";
import {ENUM_RESERVATION} from "../../../common/enum/book";
import {ENUM_ROOM_FREEDOM} from "../../../common/enum/room";



export interface ITableProps<T> {
    dataSource: T[],
    setDataSource: (data: T[]) => void,
    columns: IEditableColumnProps<T>[]
    showMessage?: (text: string, type: NoticeType) => void
}

export interface IEditableColumnProps<T> extends ColumnProps<T> {
    editable?: boolean;
}


export interface TypeItem {
    key: Number;
    name: string;
    email: string;
    login: string;
    role: ROLES;
}

export type TypeUser = Required<IUser>


export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: TypeItem;
    index: number;
    children: React.ReactNode;
}

export interface IServices {
    id: number;
    name: string;
    price: number;
    duration: number;
}

export interface IRoom {
    id: number;
    count_place: number;
    class: TYPE_CLASS_ROOM
    price: number,
    status?: ENUM_ROOM_FREEDOM
}


export interface IAppeal {
    id?: number;
    user?: IUser;
    service?: IServices;
    room?: IRoom;
    status?: STATUS_APPEAL
}



export interface IBookRoom {
    id: number;
    startDate: Date;
    endDate: Date;
    guestsCount: number;
    user: TypeUser;
    room: IRoom;
    status: ENUM_RESERVATION
}


