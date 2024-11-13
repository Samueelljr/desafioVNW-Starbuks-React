import React, { useState } from 'react'
import { HomeTitle, ButtonSection, ImageSection } from './style'
import Laranja from "../../assets/images/Laranja.png"
import Vermelho from "../../assets/images/Vermelho.png"
import Amarelo from "../../assets/images/Amarelo.png"



const Home = () => {

  return (
    <>
      <HomeTitle>
        <h1>Mais que Café </h1>

        <h2>Isso  é <span>Starbucks</span></h2>

        <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
      </HomeTitle>
      <ButtonSection>

        <button>
          SAIBA MAIS
        </button>
      </ButtonSection>

      <ImageSection>
        <img src={Laranja} alt="" />
        <img src={Vermelho} alt="" />
        <img src={Amarelo} alt="" />
      </ImageSection>

    </>
  )
}

export default Home