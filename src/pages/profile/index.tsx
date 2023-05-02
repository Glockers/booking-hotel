import {Avatar, Button, Col, Row, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import {UserOutlined} from "@ant-design/icons";
import styled from "styled-components";
import './style.css'
import {useNavigate} from "react-router-dom";
import {IUser} from "../../common/dto";
import {$api} from "../../utils/axios";

const {Title, Text} = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Root = styled.div`

  padding: 40px;
`
// фейковые данные пользователя для отображения на странице
const user = {
    name: 'Иван Иванов',
    email: 'ivanov@mail.ru',
    id: 1,
    login: "Glockers"
};

const BackgrounTemplate = styled.div`
  background-color: white;
  border-radius: 15px;

`

const WrapperHead = styled(BackgrounTemplate)`
padding: 30px;
`

const WrapperOne = styled(BackgrounTemplate)`
  padding: 15px 35px;
  margin: 30px 0;
  height: 100%;
`

const ProfilePage = () => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user) as IUser);
        }
    }, []);

    const handlerLogout = () => {
        sessionStorage.clear();
        navigate("/");
        window.location.reload();
    }
    return (
        <Root>
            <Title>Мой профиль</Title>
            <WrapperHead>

                <Wrapper>
                    <Avatar size={128} src={"https://loremflickr.com/320/240/paris,gsetUser(JSON.parse(sessionStorage.getItem(\"user\")));\nirl/all"} className="avatar"/>
                    <Button danger onClick={handlerLogout}>Выйти из аккаунта</Button>
                </Wrapper>
            </WrapperHead>

            <WrapperOne>
                <div>
                    <Title level={2}>Личная информация</Title>
                    <Row>
                        <Col span={8}>
                            <Text strong>ID:</Text>
                        </Col>
                        <Col span={16}>
                            <Text>{user.id}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Text strong>Name:</Text>
                        </Col>
                        <Col span={16}>
                            <Text>{user.name}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Text strong>Login:</Text>
                        </Col>
                        <Col span={16}>
                            <Text>{user.login}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Text strong>Email:</Text>
                        </Col>
                        <Col span={16}>
                            <Text>{user.email}</Text>
                        </Col>
                    </Row>
                </div>
            </WrapperOne>
        </Root>
    );
};

export default ProfilePage;