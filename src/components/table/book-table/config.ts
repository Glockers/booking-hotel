import {IBookRoom, IEditableColumnProps} from "../types";

export const columns: IEditableColumnProps<IBookRoom>[] = [
    {
        title: 'Номер бронирования',
        dataIndex: "id",
        sorter: (a: IBookRoom, b: IBookRoom) => a.id - b.id,
    },
    {
        title: 'ID клиента',
        dataIndex: ["user", "id"],
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => a.user.id - b.user.id,
    },
    {
        title: 'Логина клиента',
        dataIndex: ["user", "login"],
        editable: true,
        sorter: {
            compare: (a: IBookRoom, b: IBookRoom) => {
                if (a.user?.login && b.user?.login) {
                    return a.user.login.localeCompare(b.user.login);
                }
                return a.user?.login ? -1 : b.user?.login ? 1 : 0;
            }
        }
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
        dataIndex: "startDate",
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        render: (text: string, record: IBookRoom) => record.startDate.toLocaleString()
    },
    {
        title: 'Дата окончания бронирования',
        dataIndex: 'endDate',
        editable: true,
        sorter: (a: IBookRoom, b: IBookRoom) => new Date(a.endDate).getTime() - new Date(a.endDate).getTime(),
        render: (text: string, record: IBookRoom) => record.endDate.toLocaleString()
    },

];