import React from 'react';
import {useAuth} from "../../utils/hooks/auth";
import {ROLES} from "../../common/role";
import AdminSidebar from "./admin";
import ClientSidebar from "./user";

const Sidebar = (): JSX.Element => {
    const auth = useAuth();
    return auth ? (
            <>
                { auth === ROLES.ADMIN ? <AdminSidebar/> : auth === ROLES.USER ? <ClientSidebar/> : <></>}
            </>
        ) :
        (<></>)
}

export default Sidebar;