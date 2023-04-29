import React from 'react';
import AreaChart from "../../../../components/charts/area-chart";
import LineChart from "../../../../components/charts/line-chart";
import styled from "styled-components";
import {HomeOutlined} from "@ant-design/icons";
import {Title} from "../../../../common/style/header";

const Wrapper = styled.div`
  padding: 30px 60px;
`


const PageAdminDashboard = () => {
    return (
        <Wrapper>
            <Title>
               <HomeOutlined/> Панель администратора
            </Title>
            <div>

                <AreaChart/>
            </div>
            <div>
                <LineChart/>
            </div>
        </Wrapper>

    );
};

export default PageAdminDashboard;