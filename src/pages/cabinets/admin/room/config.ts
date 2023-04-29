import {IEditableColumnProps, IRoom} from "../../../../components/table/types";

export const columns: IEditableColumnProps<IRoom>[] = [
    {
        title: 'Номер комнаты',
        dataIndex: "id",
        sorter: (a: IRoom, b: IRoom) => a.id - b.id,
    },
    {
        title: 'количество месты',
        dataIndex: "count_place",
        editable: true,
        sorter: (a: IRoom, b: IRoom) => a.count_place - b.count_place,
    },
    {
        title: 'Класс номера',
        dataIndex: 'class',
        editable: true,
        sorter: {
            compare: (a: IRoom, b: IRoom) => {
                if (a.class && b.class) {
                    return a.class.localeCompare(b.class);
                }
                return 0;
            }
        }
    },
    {
        title: 'Стоимость',
        dataIndex: "price",
        editable: true,
        sorter: (a: IRoom, b: IRoom) => a.count_place - b.count_place,
    },
];

