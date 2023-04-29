import styled from "styled-components";
import Header from "../../../components/header";
import Sidebar from "../../../components/sidebar";
import * as React from "react";
import Footer from "../../../components/footer";
import {memo} from "react";

const StyleRoot = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const StyleWrapperPage = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`


const StyleWrapperContent = styled.div`
  flex: 1;
  padding: 30px 60px;
  width: 100%;
`


export const Layout = memo((props: any) => {
    return (
        <>
            <StyleRoot>
                    <Header/>
                <StyleWrapperPage>
                    <Sidebar/>
                    <StyleWrapperContent>
                        {props.children}
                    </StyleWrapperContent>
                </StyleWrapperPage>
                <Footer/>
            </StyleRoot>
        </>
    )
})
