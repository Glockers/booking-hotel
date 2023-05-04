import React, {useEffect, useState} from 'react';
import {Button, Card, Col} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import {faker} from '@faker-js/faker';
import {IBookRoom, IRoom} from "common/dto";
import {useNotificationContext} from "utils/context/notificationContext";
import DrawerBooking from "components/drawer/booking";
import {DrawerProps} from "components/drawer/type";
import FormBooking from "components/Form/form-booking";
import {$api} from "utils/axios";
import formatters from "chart.js/dist/core/core.ticks";


const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow: hidden;
  gap: 4px
`

const TitleCard = styled.h1`
  text-align: center;
  font-size: 15px;
  margin-bottom: 6px;
`

const DescCard = styled.div`
  font-size: 15px;

  height: 150px;
  overflow: hidden

`

const Description = styled.p`
  white-space: normal;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const PriceCard = styled.div`
  font-size: 15px;
  text-align: center;
`

function generateImage() {
    return faker.image.fashion()
}


const RoomCard = (props: IRoom) => {
    const {showMessage} = useNotificationContext();
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     // Check to see if this is a redirect back from Checkout
    //     const query = new URLSearchParams(window.location.search);
    //     console.log("Оплата прошла успешно")
    //     if (query.get("?success")) {
    //         showMessage("!", "success")
    //     }
    //
    //     if (query.get("?canceled")) {
    //         showMessage("Отказано в оплате :(", "error")
    //     }
    // }, []);

    function buyHandler() {
        setOpen(true)
        const userFromStorage = sessionStorage.getItem("user")

        if (userFromStorage) {

            console.log(JSON.parse(userFromStorage), props)
        } else {
            showMessage("Авторизуйтесь перед тем как бронировать!", "error");
        }
    }


    const sendData = (prepareBooking: Partial<IBookRoom>) => {
        const userFromStorage = sessionStorage.getItem("user")
        if (userFromStorage) {
            const parsedUser = JSON.parse(userFromStorage)
            prepareBooking.user = parsedUser;
            $api.post("/api/payment/room/create-checkout-session", prepareBooking).then(response => {
                    showMessage("Сейчас вы будете переброшены на оплату", "success");
                    window.location.href = response.data.url;
                }
            ).catch(e => {
                showMessage("Такого номера комнаты нет, будьте внимательны!", "error");
            })
        } else {
            showMessage("Авторизуйтесь перед тем как бронировать!!", "error");
        }
    }


    const prepareProps: DrawerProps = {
        open,
        setOpen,
    }

    return (
        <>
            <DrawerBooking {...prepareProps}><FormBooking sendData={sendData}/></DrawerBooking>
            <Col>
                <Card
                    style={{width: "300px", padding: "10px"}}
                    hoverable
                    cover={
                        <img
                            alt="example"
                            src={generateImage()}
                        />
                    }
                    actions={[
                        <Button onClick={buyHandler}><ShoppingCartOutlined key={"shop"}/>Бронировать</Button>
                    ]}
                >
                    <MainWrapper>
                        <TitleCard>#{props.id} {props.title_room}</TitleCard>
                        <DescCard><Description>Описание: {props.description_room}</Description></DescCard>
                        <PriceCard>Cтоимость{props.price} руб.</PriceCard>
                    </MainWrapper>
                </Card>
            </Col>
        </>)
}


export default RoomCard;