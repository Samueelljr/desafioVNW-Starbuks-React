import SobreImage from "../../assets/images/SobreImage.png"
import { SobreSection, ButtonSection, Legend } from "./style"

export default function Sobre() {

    return (


        <SobreSection>
            <section>

                <img src={SobreImage} alt="Loja Starbucks" />
            </section>

            <Legend>


                <h4>PREPARAÇÃO</h4>

                <h1>Níveis de torra</h1>

                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                <ButtonSection>
                    <button>SAIBA MAIS</button>
                </ButtonSection>
            </Legend>


        </SobreSection>

    )
}