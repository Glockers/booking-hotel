import {ITableProps} from "../../components/table/types";

export interface CRUDOperation<T> {
    saveHandler: (data: T) => void;
    updateHandler: (newData: T) => void;
    deleteHandler: (data: T) => void;
}

export interface IPropsTableCRUD<T> extends ITableProps<T>, CRUDOperation<T> {}