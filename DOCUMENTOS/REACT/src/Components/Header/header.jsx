import { Link } from 'react-router-dom'
import styles from './header.css'

function Header(){
    return(
        <>
            <div class="header">
        <div class="header-container">

            <Link to="/">
            <div class="header-img">
                <a href="#"><img class="img-logo" src="Logo.png" alt="Logo do projeto"/></a>
            </div>
            </Link>

            <div class="header-nav">
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/sobre">SOBRE-NÓS</Link></li>
                        <li><Link to="/como doar">COMO DOAR</Link></li>
                        <li><Link to="/pontos coleta">PONTOS DE COLETA</Link></li>
                        <li><Link to="/contato">CONTATO</Link></li>
                    </ul>
                </nav>
            </div>

            <Link to="/login">
            <div class="header-button">
                <button>LOGIN</button>
            </div>
            </Link>

        </div>
            </div>
        </>
    )
}

export default Header
