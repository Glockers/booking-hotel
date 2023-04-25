import {GridColDef} from "@mui/x-data-grid-pro";

export const serviceColumn: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'name', headerName: 'Название услуги', editable: true, flex: 1},
    {
        field: 'price',
        headerName: 'Стоимость',
        editable: true,
        flex: 1
    },
    {
        field: 'duration',
        headerName: 'Продолжительность услуги',
        editable: true,
        flex: 1
    },

]

