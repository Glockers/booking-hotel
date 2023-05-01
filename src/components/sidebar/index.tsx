import React from 'react';
import {useAuth} from "../../utils/hooks/auth";
import AdminSidebar from "./admin";
import ClientSidebar from "./user";
import {ROLES} from "../../common/enum";

const Sidebar = (): JSX.Element => {
    const auth = useAuth();
    return auth ? (
            <>
                {auth === ROLES.ADMIN ? <AdminSidebar/> : auth === ROLES.USER ? <ClientSidebar/> : <></>}
            </>
        ) :
        (<></>)
}

export default Sidebar;