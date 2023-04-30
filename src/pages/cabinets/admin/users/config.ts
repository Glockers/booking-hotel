import {IEditableColumnProps} from "../../../../components/table/types";
import {IUser} from "../../../../common/types/IStore";

export const columns: IEditableColumnProps<IUser>[] = [
    {
        title: 'Логин',
        dataIndex: "login",
        editable: true,
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