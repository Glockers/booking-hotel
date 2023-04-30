import * as React from "react";
import {Title} from "../../../../common/style/header";
import {RoomServiceOutlined} from "@mui/icons-material";
import TableService from "../../../../components/table/service-table";


function ServicePage() {
    return (
        <>
            <Title><RoomServiceOutlined/>Управление услугами</Title>
            <TableService/>
        </>
    )
}

export default React.memo(ServicePage);