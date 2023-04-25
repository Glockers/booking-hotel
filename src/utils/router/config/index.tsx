import {Navigate, RouteObject} from "react-router";
import UserCabinet from "../../../pages/cabinets/user";
import AuthRootComponent from "../../../pages/auth";
import {ROLES} from "../../../common/role";
import Page404 from "../../../pages/page404";
import AdminCabinet from "../../../pages/cabinets/admin";
import React from "react";
import {combineRoutes} from "../combine";
import HomePage from "../../../pages/home";
import UsersPage from "../../../pages/cabinets/admin/users";
import ServicePage from "../../../pages/cabinets/admin/services";
import ProfilePage from "../../../pages/profile";
import Catalog from "../../../pages/catalog";

export const roleNow: ROLES.USER | ROLES.ADMIN | null | undefined = ROLES.ADMIN

function addPrivateRouts(): RouteObject[] {
    if (roleNow === ROLES.USER) {
        return [
            {
                element:
                    <UserCabinet/>
                ,
                children: [
                    ...addHomePage(),

                    {
                        path: "/users",
                        element: <HomePage/>,
                    },
                ]
            },
        ]
    } else if (roleNow === ROLES.ADMIN) {
        return [
            {
                element:
                    <AdminCabinet/>
                ,
                children: [
                    ...addHomePage(),
                    {
                        path: 'users',
                        element: <UsersPage/>
                    },
                    {
                        path: 'services',
                        element: <ServicePage/>
                    }
                ]
            },
        ]
    } else {
        return []
    }
}

function addHomePage(): RouteObject[] {
    return [{
        index: true,
        element: <HomePage/>
    }]
}


function addAuthorization(): RouteObject[] {
    return roleNow === undefined || roleNow === null ? [
        {
            path: '/login',
            element: <AuthRootComponent/>,
        },
        {
            path: '/reg',
            element: <AuthRootComponent/>,
        },
    ] : []
}


function addErrorHandler(): RouteObject[] {
    return [
        {
            path: '*',
            element: <Page404/>
        },
    ]
}

function checkAuth(): boolean {
    return roleNow !== null;
}

function privateRouts(): RouteObject[] {
    return checkAuth() ? addPrivateRouts() : []
}

function profile(): RouteObject[] {
    return [
        {
            path: '/profile',
            element: !checkAuth() ? <Navigate to={"/login"} replace/> : <ProfilePage/>
        },
    ]
}

function addCatalog(): RouteObject[] {
    return [
        {
            path: "/catalog",
            element: <Catalog/>
        }
    ]
}

function test(): RouteObject[] {
    return [
        {
            path: '*',
            // element: <TestPage/>
        },
    ]
}

export const routes = combineRoutes({
    catalog: addCatalog,
    homePage: addHomePage,
    error: addErrorHandler,
    cabinets: privateRouts,
    auth: addAuthorization,
    profile: profile,
    // table-factory: table-factory
})

