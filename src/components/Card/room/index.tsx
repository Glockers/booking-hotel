import React, {useState} from 'react';
import {Button, Card, Col} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import {faker} from '@faker-js/faker';
import {IBookRoom, IRoom} from "common/dto";
import {useNotificationContext} from "utils/context/notificationContext";
import DrawerBooking from "components/drawer/booking";
import {DrawerProps} from "components/drawer/type";
import FormBooking from "components/Form/form-booking";


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
            console.log(prepareBooking)
        } else {
            showMessage("Авторизуйтесь перед тем как бронировать!", "error");
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