import styled from "styled-components";
import * as React from "react";
import {Button} from "antd";
import {$api, axiosPublic} from "../../../../utils/axios";


const Header = styled.h1`
  margin-bottom: 20px;
`


function handler(event: any) {
    event.preventDefault();
    $api.post('/api/test').then(res => {
        console.log(res.data)

    })
}

function ServicePage() {
    return (
        <>
            <Header>Управление услугами</Header>
            {/*<TableFactory initialRows={initialRows} columns={serviceColumn}/>*/}
            <Button onClick={handler}>Tester</Button>
        </>
    )
}

export default React.memo(ServicePage);