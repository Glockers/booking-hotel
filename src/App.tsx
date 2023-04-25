import React, {Suspense} from 'react'
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import Routing from "./pages";

const Global = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: aliceblue;
    overflow-x: hidden;
  }

  #root {
    //height: 100%;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: black;
  }
`
const App = (): JSX.Element => {
    return (
        <>
            <Global/>

            <BrowserRouter>
                    <Provider store={store}>
                        <Suspense fallback="Загрузка">
                            <Routing/>
                        </Suspense>
                    </Provider>
            </BrowserRouter>

        </>
    )
};

export default App
