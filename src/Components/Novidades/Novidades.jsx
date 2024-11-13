import React from 'react'
import { Legends, ButtonSection, NovidadesSection } from "./style"
import Semente from '../../assets/images/Semente.png'

const Novidades = () => {

  return (
    
    <NovidadesSection>

      <Legends>


        <h4>PREPARAÇÃO</h4>

        <h1>Níveis de torra</h1>

        <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

        <ButtonSection>
          <button>SAIBA MAIS</button>
        </ButtonSection>
      </Legends>

      <section>
        <img src={Semente} alt="" />
      </section>
    </NovidadesSection>
  
  )
}

export default Novidades