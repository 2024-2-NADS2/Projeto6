import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import './index.css'
import { Link } from "react-router-dom"

function Contact(){
    return(
        <>
            <Header/>
            <div class="banner">
        <h1>Contato</h1>
    </div>


    <div class="container-contato">
        <div class="container">

            <div class="txt-contato">
                <h1>Fale <br/> conosco</h1>
                <p>Preencha o formulário ao lado para entrar em contato conosco.</p>

                <div class="icons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>

            <div class="form-contato">
                <form action="/submit" method="POST">
                    <input type="text" name="nome" placeholder="Seu nome"/>
                    <input type="email" name="email" placeholder="Seu e-mail"/>
                    <input type="text" name="assunto" placeholder="Assunto"/>
                    <textarea name="mensagem" placeholder="Sua mensagem"></textarea>
                    <button type="submit">Enviar Mensagem</button>
                  </form>
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

export default Contact
