import {IAppeal, IEditableColumnProps} from "../../../../components/table/types";

export const columns: IEditableColumnProps<IAppeal>[] = [
    // {
    //     title: 'ID',
    //     dataIndex: "id",
    //     editable: true,
    //     sorter: (a: IAppeal, b: IAppeal) => a.id - b.id,
    // },
    //
    // {
    //     title: 'ID Клиента',
    //     dataIndex: "idClient",
    //     editable: true,
    //     sorter: (a: IAppeal, b: IAppeal) => a.loginClient - b.loginClient,
    // },
    // {
    //     title: 'Номер услуги',
    //     dataIndex: 'idService',
    //     editable: true,
    //     sorter: (a: IAppeal, b: IAppeal) => a.idService - b.idService,
    // },
    // {
    //     title: 'Статус',
    //     dataIndex: 'status',
    //     editable: true,
    //     sorter: {
    //         compare: (a: IAppeal, b: IAppeal) => {
    //             if (a.status && b.status) {
    //                 return a.status.localeCompare(b.status);
    //             }
    //             return 0;
    //         }
    //     }
    // },
];