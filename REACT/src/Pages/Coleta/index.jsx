import './index.css'
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { Link } from 'react-router-dom'

function Coleta(){
    return(
        <>
        <Header/>

        <div class="banner-container">
        <h1>Pontos de coleta</h1>
        </div>

        <div className="mainnn-container">
            <div className="container">

            <div class="txt">
                <h1>Encontre um Ponto de Coleta perto de você.</h1>
                <p>Ao encontrar um ponto de coleta próximo a você, contribua com a doação de materiais escolares em bom estado. Suas doações ajudam a promover a educação igualitária e a proteger o meio ambiente. Vamos juntos transformar o futuro!</p>

                <div class="icons">
                    <i class="fa-solid fa-hand-fist"></i>
                    <i class="fa-solid fa-recycle"></i>
                    <i class="fa-solid fa-earth-americas"></i>
                </div>
            </div>

            <div class="mapa-iterativo">
                <div class="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14635.81823331928!2d-46.737508649999995!3d-23.4981462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1726586808190!5m2!1spt-BR!2sbr"></iframe>
                </div>
        
                <div class="caixa-box">
                    <h3>ENDEREÇO</h3>
        
                    <p><i class="fa-regular fa-building"></i>Av. Paulista, 726 - 3º Andar.</p>
        
                    <p><i class="fa-regular fa-clock"></i>Segunda à Sexta - 8h às 19h.</p>
        
                    <p><i class="fa-solid fa-phone"></i>Tel: (11) 3284-4033</p>
        
                    <p><i class="fa-regular fa-envelope"></i>Ecomaterialize@gmail.com</p>
        
                    <p><i class="fa-brands fa-instagram"></i>Eco_Materialize.br</p>
        
                    <div class="caixa-box-button">
                        <Link to="/contato">
                        <button>ENTRE EM CONTATO</button>
                        </Link>
                    </div>
                </div>
            </div>

                
            </div>
        </div>



        <div class="container-doe-agora">
            <div class="container">
                <h1>Nos ajude a continuar transformando vidas e gerando impacto para milhares de famílias no Brasil</h1>
               <Link to="/como doar"><button><i class="fa-solid fa-hand-holding-heart"></i>Doe agora</button></Link>
            </div>
        </div>

        <Footer/>


        </>
    )
}


export default Coleta
