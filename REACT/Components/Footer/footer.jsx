import { Link } from 'react-router-dom'
import styles from './footer.css'

function Footer(){
    return(
        <>
                <div class="footer-container">
        <div class="container">
            <div class="row">

                <div class="footer-colunas">
                    <h4>Eco-Materialize</h4>
                    <p>Nossa missão é garantir educação acessível a todos por meio da doação e troca de materiais escolares, promovendo sustentabilidade e inclusão.</p>
                </div>

                <div class="footer-colunas-colunas-padding">
                    <h4>Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre-nós</Link></li>
                            <li><Link to="/como doar">Como doar</Link></li>
                            <li><Link to="">Pontos de coleta</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                </div>

                <div class="footer-colunas-colunas-padding">
                    <h4>Acesso Rápido</h4>
                        <ul>
                            <li><Link to="/como doar">Doe agora</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cadastro">Cadastre-se</Link></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                </div>

                <div class="footer-colunas">
                    <h4>Siga-nos</h4>
                    <div class="social-links">
                        <a  href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
    
            </div>
        </div>
    </div>

    <div class="direitos-autorais">
        <p>&copy; 2024 Eco-Materialize. Todos os direitos reservados.</p>
    </div>


        </>
    )
}

export default Footer
