import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Sobre from './Components/Sobre/Sobre'
import Home from './Components/Home/Home'
import Novidades from './Components/Novidades/Novidades'
import styled, { createGlobalStyle } from "styled-components";

const App = () => {

    const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

:root {
    --color-bg: #faf3f3;
    --color-red: #97090C;
    --color-yellow: #DECD13;
    --color-green: #037143;
  }
`;

    return (
        <>
        <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/novidades' element={<Novidades/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App