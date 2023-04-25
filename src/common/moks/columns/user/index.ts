import {GridColDef} from "@mui/x-data-grid-pro";

export const userColumn: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'name', headerName: 'Имя', editable: true, flex: 1},
    {field: 'age', headerName: 'Фамилия', editable: true, flex: 1},
    {
        field: 'email',
        headerName: 'Почта',
        editable: true,
        flex: 1

    },
    {
        field: 'login',
        headerName: 'Логин',
        editable: true,
        flex: 1
    },
    {
        field: 'role',
        headerName: 'Роль',
        editable: true,
        flex: 1
    },
]

