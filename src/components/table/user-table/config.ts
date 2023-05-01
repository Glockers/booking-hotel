import {IRoom, IUser} from "../../../common/dto";
import {IEditableColumnProps} from "../../../common/types/table";

export const columns: IEditableColumnProps<IUser>[] = [
    {
        title: 'ID',
        dataIndex: "id",
        sorter: (a: IUser, b: IUser) => a.id - b.id,
    },
    {
        title: 'Логин',
        dataIndex: "login",
        sorter: {
            compare: (a: IUser, b: IUser) => {
                if (a.login && b.login) {
                    return a.login.localeCompare(b.login);
                }
                return 0;
            }
        }
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        editable: true,
        sorter: {
            compare: (a: IUser, b: IUser) => {
                if (a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }
                return 0;
            }
        }
    },
    {
        title: 'email',
        dataIndex: 'email',
        editable: true,
        sorter: {
            compare: (a: IUser, b: IUser) => {
                if (a.email && b.email) {
                    return a.email.localeCompare(b.email);
                }
                return 0;
            }
        }
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        editable: true,
        sorter: {
            compare: (a: IUser, b: IUser) => {
                if (a.role && b.role) {
                    return a.role.localeCompare(b.role);
                }
                return 0;
            }
        }
    }
];