import styled from "styled-components";
import Header from "../../../components/header";
import Sidebar from "../../../components/sidebar";
import * as React from "react";
import Footer from "../../../components/footer";
import {memo} from "react";

export const StyleRoot = styled.div`
  width: 100%;
  height: 100%;
`

export const StyleWrapperPage = styled.div`
  display: flex;
  height: 100%;
`


export const StyleWrapperContent = styled.div`
  padding: 30px 60px;
  width: 100%;
`

export const Layout = memo((props: any)=>{
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