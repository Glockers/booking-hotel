import {Form, Layout, Row} from 'antd';
import {IRoom} from 'common/dto';
import React, {useEffect, useState} from 'react';
import {axiosPublic} from 'utils/axios';
import {ENUM_ROOM_FREEDOM, TYPE_CLASS_ROOM} from "common/enum";
import RoomCard from "components/Card/room";
import {FormProvider} from "antd/es/form/context";
import FormBooking from "components/Form/form-booking";
import {useForm} from "react-hook-form";

const roomMock: IRoom = {
    description_room: "ewqjerjwe",
    title_room: "123ewr",
    id: 1,
    roomClass: TYPE_CLASS_ROOM.LUX,
    count_place: 3,
    price: 123,
    status: ENUM_ROOM_FREEDOM.BOOKED
}

const RoomCatalogPage = () => {
    const [room, setRoom] = useState<IRoom[]>([] as IRoom[])

    useEffect(() => {
        axiosPublic.get<IRoom[]>("/api/room/getAll").then(result => {
            setRoom(result.data)
        }).catch((error) => console.log(error))
    }, [])

    const methods = useForm<any>();

    return (
        <>

            {/*<FormProvider {...methods}>*/}
            {/*    <Form layout="vertical" onSubmitCapture={methods.handleSubmit((data) => console.log(data, "test"))}>*/}
            {/*        <FormBooking/>*/}
            {/*        <input type={"submit"}/>*/}
            {/*    </Form>*/}
            {/*</FormProvider>*/}

            <Layout>
                <section className="catalog">
                    <Row gutter={[100, 40]} style={{padding: "30px", borderRadius: "30px"}} wrap>
                        {/* {room.map((element) => {*/}
                        {/*    return <RoomCard {...element} key={element.id}/>*/}
                        {/*})}*/}
                        <RoomCard {...roomMock}></RoomCard>
                    </Row>
                </section>
            </Layout>
        </>
    );
};

export default RoomCatalogPage;