import * as React from 'react';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {HomeOutlined} from "@ant-design/icons";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-bottom: 70px;
  text-align: center;
  font-size: 60px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 250px;
`

const PostWrapperContent = styled.div`

`

const ContactWrapper = styled.div`
  margin: 25px 0 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ContactTitle = styled.h1`
  font-size: 60px;
`

function HomePage() {


    return (
        <>
            <StyledTitle><HomeOutlined/> Главная страница</StyledTitle>
            <Wrapper>
                <YMaps>
                    <Map
                        width="60%" height="600px"
                        defaultState={{
                            center: [53.952979, 27.611265],
                            zoom: 12,
                            controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}
                    >
                        <Placemark defaultGeometry={[53.952979, 27.611265]}/>
                    </Map>
                </YMaps>
                <PostWrapperContent>
                    <ContactTitle>
                        Контакты:
                    </ContactTitle>
                    <ContactWrapper>
                        <h3>email: glockerwork@gmail.com</h3>
                        <h3>A1: +375 (25) 665-61-31</h3>
                        <h3>telegram: @fossfenn</h3>
                    </ContactWrapper>

                    <ContactTitle>
                        Адресс:
                    </ContactTitle>
                    <ContactWrapper>
                        <h3>улица Кольцова, 10, Минск</h3>
                    </ContactWrapper>
                </PostWrapperContent>
            </Wrapper>
        </>)

}

export default HomePage