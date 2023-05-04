import React, {useEffect, useState} from "react";
import {IBookRoom} from "common/dto";
import {Table} from "antd";
import {columns} from "components/table/user-book-table/config";
import {$api} from "utils/axios";


const ClientBookingTable = () => {
    const [dataSource, setDataSource] = useState<IBookRoom[]>([]);

    useEffect(() => {
        $api.post<IBookRoom[]>("/api/booking/getMyBooking", JSON.parse(sessionStorage.getItem("user") as string) )
            .then(value => value ? setDataSource(value.data) : null)

    }, [])

    return (
        <>

            <Table rowKey={record => record.id} dataSource={dataSource} columns={columns}/>;
        </>
    )
};

export default ClientBookingTable;