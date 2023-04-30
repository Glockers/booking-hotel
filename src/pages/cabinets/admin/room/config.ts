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
        dataIndex: 'roomClass',
        editable: true,
        sorter: {
            compare: (a: IRoom, b: IRoom) => {
                if (a.roomClass && b.roomClass) {
                    return a.roomClass.localeCompare(b.roomClass);
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

