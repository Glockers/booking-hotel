import {Avatar, Button, Col, Row, Typography} from 'antd';
import React from 'react';
import {useAuth} from '../../utils/hooks/auth';
import {IdcardOutlined, LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import styled from "styled-components";
import './style.css'
import {useNavigate} from "react-router-dom";
const { Title, Text } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`
const Root = styled.div`

  padding: 40px;
`

const TitleHeader = styled.h1`
  margin: 0 0 40px 0;
`

const ProfilePage = () => {

    const navigate = useNavigate();
    // фейковые данные пользователя для отображения на странице
    const user = {
        name: 'Иван Иванов',
        email: 'ivanov@mail.ru',
        id: 1,
        login: "Glockers"
    };

    const handler = ()=>{
        sessionStorage.clear();
        navigate("/");
        window.location.reload();

    }
    return (
        <Root>
            <Title>Мой профиль</Title>
            <Wrapper>
                <Avatar size={128} icon={<UserOutlined/>} className="avatar"/>
                <Button danger onClick={handler}>Выйти из аккаунта</Button>
            </Wrapper>
            <div style={{ padding: '0px', marginTop: '20px'}}>
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

        </Root>
    );
};

export default ProfilePage;