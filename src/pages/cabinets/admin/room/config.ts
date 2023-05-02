import { IRoom } from "../../../../common/dto";
import { IEditableColumnProps } from "../../../../common/types/table";

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
        title: 'Описание номера',
        dataIndex: 'description_room',
        editable: true,
        sorter: {
            compare: (a: IRoom, b: IRoom) => {
                if (a.description_room && b.description_room) {
                    return a.description_room.localeCompare(b.description_room);
                }
                return 0;
            }
        }
    },
    {
        title: 'Заголовок номера',
        dataIndex: 'title_room',
        editable: true,
        sorter: {
            compare: (a: IRoom, b: IRoom) => {
                if (a.title_room && b.title_room) {
                    return a.title_room.localeCompare(b.title_room);
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

