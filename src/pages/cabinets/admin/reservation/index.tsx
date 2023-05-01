import React from 'react';
import TableBook from "../../../../components/table/book-table";
import styled from "styled-components";

const Header = styled.h1`
  margin-bottom: 20px;
`

const ReservationPage: React.FC = () => {

    return (
        <>
            <Header>Управление бронированиями номеров</Header>
            <TableBook/>
        </>
    );
};

export default ReservationPage;