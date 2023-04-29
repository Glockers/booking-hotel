import React, {memo} from 'react';
import styled from "styled-components";
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: lightskyblue;
  color: #fff;
  padding: 10px 200px;
`;

const Nav = styled.nav`

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 70px;

  }
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
`;


const NavigationContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 40px;
  width: 100%;
`;

function Header(): JSX.Element {
    return (
        <>
            <HeaderContainer>
                <Nav>
                    <ul>
                        <NavigationContentStyle>
                            <NavItem>
                                <Link to={"/"} replace>Главная</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/catalog"} replace>Каталог</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/profile"}>
                                    <UserOutlined/>
                                </Link>
                            </NavItem>
                        </NavigationContentStyle>
                    </ul>
                </Nav>
            </HeaderContainer>
        </>

    )
        ;
}


export default memo(Header);