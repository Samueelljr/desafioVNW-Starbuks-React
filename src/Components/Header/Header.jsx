import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <img src="" alt="logomarca" />

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/novidades">Novidades</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header