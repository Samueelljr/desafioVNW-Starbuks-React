import React from 'react'
import { Link } from 'react-router-dom'
import StarbuksLogo from "../../assets/images/StarbuksLogo.png"
import { Section } from './style'


const Header = () => {

    return (
        
            <Section>
                <img src={StarbuksLogo} alt="logomarca" />

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/novidades">Novidades</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </Section>

    )
}

export default Header