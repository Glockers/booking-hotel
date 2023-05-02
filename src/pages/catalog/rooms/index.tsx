import { faker } from '@faker-js/faker/locale/ru';

import { Layout, Row } from 'antd';
import { IRoom } from 'common/dto';
import RoomCard from 'components/Card/room';
import React, { useEffect, useState } from 'react';
import { axiosPublic } from 'utils/axios';

const RoomCatalogPage = () => {
    const [room, setRoom] = useState<IRoom[]>([] as IRoom[])

    useEffect(() => {
        axiosPublic.get<IRoom[]>("/api/room/getAll").then(result => {
            setRoom(result.data)
        }).catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Layout>
                <section className="catalog">
                    <Row gutter={[100, 40]} style={{ padding: "30px", borderRadius: "30px" }} wrap>
                         {room.map((element) => {
                            return <RoomCard {...element} key={element.id}/>
                        })}
                    </Row>
                </section>
            </Layout>
        </>
    );
};

export default RoomCatalogPage;