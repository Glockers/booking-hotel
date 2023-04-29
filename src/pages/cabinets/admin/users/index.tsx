import styled from "styled-components";
import * as React from "react";
import UserTable from "../../../../components/table/user-table";


const Header = styled.h1`
  margin-bottom: 20px;
`

export function UsersPage() {
    return (
        <>
            <Header>Управление пользователями</Header>
            <UserTable/>
            {/*<TableFactory initialRows={initialRows} columns={userColumn}/>*/}
        </>
    )
}

export default React.memo(UsersPage)