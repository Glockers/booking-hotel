import React from 'react';
import {Outlet} from "react-router-dom";
import {Layout} from "../../../common/style/page";

const UserCabinet = (): JSX.Element => {
    return (
      <Layout>
          <Outlet/>
      </Layout>
    );
};

export default UserCabinet;
