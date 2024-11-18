import React, { useState } from 'react'
import { HomeTitle, ButtonSection, ImageSection, CopoContainer, FigureContainer, HomeSection, ImageContainer } from './style'
import Laranja from "../../assets/images/Laranja.png"
import Vermelho from "../../assets/images/Vermelho.png"
import Amarelo from "../../assets/images/Amarelo.png"
import FundoVerde from '../../../public/FundoVerde.png'
import FundoVermelho from "../../../public/FundoVermelho.png"
import FundoAmarelo from '../../../public/FundoAmarelo.png'



const Home = () => {

  const [copo, setCopo] = useState({
    src: "CopoLaranja.png",
    src2: "FundoVerde.png"
  });

  const handleClick = (src, src2) => {
    setCopo({ src, src2 })
  }

  return (

    <HomeSection>

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


      <ImageContainer>
        <ImageSection>
          <img onClick={() => { handleClick("CopoLaranja.png", "FundoVerde.png") }} src={Laranja} alt="" />
          <img onClick={() => { handleClick("CopoVermelho.png", "FundoVermelho.png") }} src={Vermelho} alt="" />
          <img onClick={() => { handleClick("CopoAmarelo.png", "FundoAmarelo.png") }} src={Amarelo} alt="" />
        </ImageSection>

        <CopoContainer>
          <FigureContainer>
            <img className='bebida' src={copo.src} alt="" />
            <img src={copo.src2} alt="" />
          </FigureContainer>
        </CopoContainer>
      </ImageContainer>

    </HomeSection>
  )
}

export default Home