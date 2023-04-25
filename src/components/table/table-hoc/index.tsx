import React, {useState, useEffect} from 'react';
import {
    GridActionsCellItem,
    GridColDef,
    GridEventListener,
    GridRowId, GridRowModel,
    GridRowModes,
    GridRowModesModel,
    GridRowParams,
    MuiEvent
} from "@mui/x-data-grid-pro";
import TableFactory from "../table-factory";
import {userColumn} from "../../../common/moks/columns/user";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {Table} from "antd";


type MyComponentProps = {
    data: any[];
    isLoading: boolean;
    error: Error | null;
};

type WithDataFetchingProps = {
    dataSource: string;
};



// const withDataTable = <P extends object>(
//     WrappedComponent: React.ComponentType<P>,
// ) => {
//     const [loading, setLoading] = useState(false)
//     return (props: any) => {
//         <Table bordered loading={loading} {...props}/>
//     }
// }

// export const MyComponentWithData = withDataTable(TableFactory);
// export default withDataTable
