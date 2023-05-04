import {IEditableColumnProps} from "common/types/table";
import {IBookRoom} from "common/dto";
import moment from "moment/moment";

export const columns: IEditableColumnProps<IBookRoom>[] = [
    {
        title: 'Номер бронирования',
        dataIndex: "id",
        sorter: (a: IBookRoom, b: IBookRoom) => a.id - b.id,
    },
    {
        title: 'Номер комнаты',
        dataIndex: ["room", "id"],
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => a.room.id - b.room.id,
    },
    {
        title: 'Кол-во людей',
        dataIndex: "guestsCount",
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => a.guestsCount - b.guestsCount,
    },
    {
        title: 'Дата Начало бронирования',
        dataIndex: "dateStart",
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => new Date(a.dateEnd).getTime() - new Date(b.dateEnd).getTime(),
        render: (text: string, record: IBookRoom) => moment(record.dateEnd).format("YYYY-MM-DD HH:mm")
    },
    {
        title: 'Дата окончания бронирования',
        dataIndex: 'dateEnd',
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => new Date(a.dateStart).getTime() - new Date(a.dateStart).getTime(),
        render: (text: string, record: IBookRoom) =>  moment(record.dateStart).format("YYYY-MM-DD HH:mm")
    },
    {
        title: 'Статус оплаты',
        dataIndex: "status",
        editable: true,
        sorter: {
            compare: (a: IBookRoom, b: IBookRoom) => {
                if (a.status && b.status) {
                    return a.status.localeCompare(b.status);
                }
                return a.status ? -1 : b.status ? 1 : 0;
            }
        }
    },
];