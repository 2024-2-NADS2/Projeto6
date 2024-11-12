import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import './index.css'
import { Link } from "react-router-dom"

function Sobre(){
    return(
        <>
        <Header/>
        <div class="banner-quem-somos">
        <h1>Quem Somos</h1>
    </div>


    <div class="main-container">
        <div class="container">

                <div class="txt">
                    <h1>Eco Materialize Brasil</h1>
                    <h3>O Eco Materialize visa e trabalha pela transformação social, promovendo a educação e a sustentabilidade, buscando uma sociedade mais justa, consciente e acessível, onde todos possam colaborar ativamente para o bem comum.</h3>
                    <p>No Eco Materialize, trabalhamos por um mundo onde a educação de qualidade seja acessível a todos, independentemente de sua condição social. Acreditamos que a doação de materiais escolares em bom estado e a arrecadação de recursos financeiros podem transformar a vida de muitas pessoas e impactar positivamente o meio ambiente.
                        <br/><br/>
                        Nossos voluntários, movidos por um compromisso de solidariedade e sustentabilidade, viabilizam esse objetivo por meio de um trabalho que valoriza a educação, o respeito e a responsabilidade social. Cada doação e cada ação ecoam em nossa missão, fazendo crescer uma rede de apoio que vai muito além do simples ato de doar.
                        <br/><br/>
                        Nosso time é composto por pessoas engajadas e comprometidas com a ideia de que juntos podemos fazer a diferença. A participação ativa e o alto grau de engajamento dos nossos membros têm sido fundamentais para o sucesso do Eco Materialize, tornando possível transformar sonhos em realidade.
                        <br/><br/>
                        Levamos em nosso DNA a empatia, a confiança e a ética em cada uma de nossas ações, sempre com foco em um futuro mais justo e sustentável para todos.</p>
                </div>

                <div class="img">
                    <img src="CriançasEstudando.png" alt="Crianças" width="400px" height="417px"/>
               </div>

        </div>
    </div>




    <div class="missao-container">
        <div class="txt-missao">
        <h1>Missão</h1>
        <h3>É missão do Eco-Materialize:</h3>
        </div>  

        <div class="container">
            <div class="box-container">
                <h3>Educar</h3>
                <p>Garantir acesso à educação de qualidade para todos os necessitados.</p>
            </div>

            <div class="box-container">
                <h3>Conectar</h3>
                <p>Pessoas e instituições que buscam contribuir de alguma forma para a educação.</p>
            </div>

            <div class="box-container">
                <h3>Oferecer</h3>
                <p>Aos pais e familiares o suporte e a compreensão necessária para lidarem com uma visão ética de respeito à diversidade.</p>
            </div>

            <div class="box-container">
                <h3>Criar</h3>
                <p>Oportunidades educacionais e sociais.</p>
            </div>
        </div>
    </div>


    <div class="visao-container">
        <div class="container">
            <h1>Visão</h1>
            <h3>O Eco Materialize visa e trabalha pela transformação social, buscando uma sociedade mais humana, justa e acolhedora, onde todos possam participar ativamente.</h3>
            <p>Promover a igualdade de acesso à educação e a preservação ambiental são pilares essenciais para construir uma sociedade mais justa e sustentável. Acreditamos que todos, independentemente de sua condição social, merecem ter as ferramentas necessárias para aprender e crescer. Ao incentivar a reutilização de materiais e o cuidado com o meio ambiente, buscamos inspirar confiança, responsabilidade e consciência ecológica nas futuras gerações, preparando-as para um futuro mais inclusivo e sustentável.</p>
        </div>
    </div>



    <div class="valores-container">

        <div class="txt-valores">
            <h1>Nossos Valores</h1>
        </div>

        <div class="container">
            <div class="box-container">
                <i class="fa-solid fa-hand-holding-heart"></i>
                <h1>Solidariedade</h1>
                <p>Ajudar a todos sem olhar a quem, com empatia, respeito e generosidade.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h1>Transparência</h1>
                <p>Agir com clareza e honestidade em todas as nossas ações.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-seedling"></i>
                <h1>Sustentabilidade</h1>
                <p>Promover práticas que respeitem o meio ambiente e contribuam para um futuro melhor.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-landmark"></i>
                <h1>Compromisso Social</h1>
                <p>Trabalhar pela inclusão e equidade, garantindo oportunidades iguais para todos.</p>
            </div>
        </div>

    </div>



    <div class="section-faça-parte">
        <div class="txt-h1">
            <h1>Faça Parte!</h1>
            <h3>Abrace a Inclusão!</h3>
        </div>

        <div class="btn-doar">
            <Link to="/como doar">
            <button>DOE JÁ</button>
            </Link>
        </div>
    </div>

        <Footer/>
        </>
    )
}

export default Sobre
