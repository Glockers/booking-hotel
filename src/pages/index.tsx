import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import {ROLES} from "../common/role";
import HomePage from "./home";
import {useAuth} from "../utils/hooks/auth";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {UsersPage} from "./cabinets/admin/users";
import {Layout} from "../common/style/page";
import ProfilePage from "./profile";
import AuthRootComponent from "./auth";
import Page404 from "./page404";
import AdminCabinet from "./cabinets/admin";
import UserCabinet from "./cabinets/user";
import Catalog from "./catalog";
import GuestCabinet from "./cabinets/guest";

const commonRoute = [
    <Route index path="/" element={<HomePage/>}/>,
    <Route path="/catalog" element={<Catalog/>}/>,
    <Route path={"*"} element={<Page404/>}/>
]

const Routing = () => {
    const role = useAuth();
    return (
        <Routes>


            {role === ROLES.USER ?
                <Route element={<UserCabinet/>}>
                    <Route path="/login" element={<Navigate to={"/profile"}/>}/>
                    <Route path="/reg" element={<Navigate to={"/profile"}/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    {...commonRoute}
                </Route> : null
            }
            {role === ROLES.ADMIN ?
                <Route element={<AdminCabinet/>}>
                    <Route path="/login" element={<Navigate to={"/profile"}/>}/>
                    <Route path="/reg" element={<Navigate to={"/profile"}/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    {...commonRoute}
                </Route> : null
            }
            <Route element={<GuestCabinet/>}>
                <Route path="/profile" element={<Navigate to={"/login"}/>}/>
                <Route path="/login" element={<AuthRootComponent/>}/>
                <Route path="/reg" element={<AuthRootComponent/>}/>
                {...commonRoute}
            </Route>
        </Routes>
    )
};
export default Routing;