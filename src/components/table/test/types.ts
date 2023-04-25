import React from "react";



export interface TypeItem {
    key: React.Key;
    name: string;
    age: number;
    address: string;
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


export type KeyReact = { key: React.Key }