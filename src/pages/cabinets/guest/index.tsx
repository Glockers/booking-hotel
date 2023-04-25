import React from 'react';
import {Layout} from "../../../common/style/page";
import {Outlet} from "react-router-dom";

const GuestCabinet = () => {
    return (
        <Layout>
            <Outlet/>
        </Layout>
    );
};

export default GuestCabinet;