import {NoticeType} from "antd/es/message/interface";
import {ColumnProps} from "antd/es/table";
import React from "react";
import {ROLES} from "../../enum";

export interface IEditableColumnProps<T> extends ColumnProps<T> {
    editable?: boolean;
}

export interface ITableProps<T> {
    dataSource: T[],
    setDataSource: (data: T[]) => void,
    columns: IEditableColumnProps<T>[]
    showMessage?: (text: string, type: NoticeType) => void
}

export interface TypeItem {
    key: number;
    name: string;
    email: string;
    login: string;
    role: ROLES;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: TypeItem;
    index: number;
    children: React.ReactNode;
}

export interface CRUDOperation<T> {
    saveHandler: (data: T) => void;
    updateHandler: (newData: T) => void;
    deleteHandler: (data: T) => void;
}

export interface IPropsTableCRUD<T> extends ITableProps<T>, CRUDOperation<T> {
}