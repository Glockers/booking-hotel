import {IServices} from "common/dto";
import {Button, Card, Col} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import styled from "styled-components";
import {faker} from "@faker-js/faker";
import {useNotificationContext} from "utils/context/notificationContext";
import DrawerBooking from "components/drawer/booking";
import {DrawerProps} from "components/drawer/type";


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



export const ServiceCard = (props: IServices) => {
    const {showMessage} = useNotificationContext();

    function buyHandler() {
        const userFromStorage = sessionStorage.getItem("user")
        if (userFromStorage) {
            console.log(JSON.parse(userFromStorage), props)
        } else {
            showMessage("Авторизуйтесь перед тем как приобретать услугу!", "error");
        }
    }



    return (
        <>

            <Col>
                <Card
                    style={{width: "300px", padding: "10px"}}
                    hoverable
                    cover={
                        <img
                            alt={props.name}
                            src={generateImage()}
                        />
                    }
                    actions={[
                        // <HeartOutlined key={"heart"}/>,
                        <Button onClick={buyHandler}><ShoppingCartOutlined key={"shop"}/>Купить</Button>
                    ]}
                >
                    <MainWrapper>
                        <TitleCard>#{props.id} {props.name}</TitleCard>
                        <DescCard><Description>Продолжительность услуги: {props.duration} мин.</Description></DescCard>
                        <PriceCard>Cтоимость{props.price} руб.</PriceCard>
                    </MainWrapper>
                </Card>
            </Col>
        </>)
}