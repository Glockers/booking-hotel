import {ITableProps} from "../../components/table/types";

export interface CRUDOperation<T> {
    saveHandler: (data: T) => void;
    updateHandler: (oldData: T, newData: T) => void;
    deleteHandler: (data: T) => void;
}

export interface IPropsTableCRUD<T> extends ITableProps<T>, CRUDOperation<T> {}