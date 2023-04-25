import React from 'react';
import {Button, Card, Col} from "antd";
import {EditOutlined, EllipsisOutlined, HeartOutlined, SettingOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const {Meta} = Card;

const RoomCard = () => (
    <Col>
        <Card
            style={{width: 300}}
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                // <HeartOutlined key={"heart"}/>,

                <Button><ShoppingCartOutlined key={"shop"}/>Купить</Button>
            ]}
        >
            <Meta
                // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Заголовок"
                description="This is the description"
            />
        </Card>
    </Col>
)

export default RoomCard;