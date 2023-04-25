import styled from "styled-components";
import * as React from "react";
import TestTable from "../../../../components/table/test";


const Header = styled.h1`
  margin-bottom: 20px;
`

export function UsersPage() {
    return (
        <>
            <Header>Управление пользователями</Header>
            <TestTable/>
            {/*<TableFactory initialRows={initialRows} columns={userColumn}/>*/}
        </>
    )
}

export default React.memo(UsersPage)