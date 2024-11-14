import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import './index.css'

function ComoDoar(){
    return(
        <>
        <Header/>
        <div class="banner-como-doar">
        <h1>Como Doar</h1>
    </div>


    <div class="main-txt">
        <h1>Abrace a Inclusão</h1>
        <h3>Com sua ajuda, podemos mais.</h3>
        <p>Contribuir para o futuro de nossas crianças e adolescentes é simples e acessível. No Eco-Materialize, você pode doar de duas formas: com uma contribuição financeira (R$) ou doando materiais escolares em bom estado. Cada doação ajuda a garantir o acesso à educação de qualidade para pessoas que enfrentam dificuldades, além de promover a reutilização de materiais, reduzindo o desperdício e preservando nosso planeta.</p>
    </div>


    <div class="secao-como-doar">
        <h1>Passo a passo para doar:</h1>
        <div class="container">
            <div class="box-container">
                <i class="fa-regular fa-hand-point-up"></i>
                <h3>Escolha o tipo de doação:</h3>
                <p>Opte por uma contribuição financeira (R$) ou pela doação de materiais escolares.</p>
            </div>

            <div class="box-container">
                <i class="fa-regular fa-rectangle-list"></i>
                <h3>Preencha o formulário:</h3>
                <p>Forneça algumas informações básicas para que possamos processar a sua doação.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-check-double"></i>
                <h3>Confirme a doação:</h3>
                <p>Finalize o processo de forma rápida e segura.</p>
            </div>
        </div>
    </div>



    <div class="faca-sua-doacao">
        <h1>Faça sua <span>Doação</span></h1>
        <h3>Planos Mensais:</h3>

        <div class="container">
            <div class="box-container">
                <h3>R$ <span>30,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

            <div class="box-container">
                <h3>R$ <span>60,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

            <div class="box-container">
                <h3>R$ <span>120,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

            <div class="box-container">
                <h3>R$ <span>240,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

            <div class="box-container">
                <h3>R$ <span>480,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

            <div class="box-container">
                <h3>R$ <span>960,00</span>/Mês</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Quero doar mensal</button>
            </div>

        </div>
    </div>
    






    <div class="planos-avulso">
        <h1>Doações avulsas:</h1>

        <div class="container">
            <div class="box-container">
                <i class="fa-solid fa-brazilian-real-sign"></i>
                <h3>Qualquer quantia</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Doar</button>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-book"></i>
                <h3>Doação de Itens</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Doar</button>
            </div>

            <div class="box-container">
                <i class="fa-brands fa-pix"></i>
                <h3>Doação via pix</h3>
                <p>Seja parte dessa transformação e ajude-nos a fazer a diferença!</p>
                <button>Doar</button>
            </div>
        </div>
    </div>




    <div class="oque-estamos-ajudando">
       <div class="container">
        <h1>Como minha <br/> doação esta ajudando?</h1>

        <div class="container-ajuda">
            <div class="box-container">
                <i class="fa-solid fa-book"></i>
                <h3>Acesso à Educação</h3>
                <p>Doações ajudam a fornecer materiais escolares para crianças e jovens, promovendo igualdade no acesso à educação.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-people-roof"></i>
                <h3>Fortalecimento da Comunidade</h3>
                <p>Apoio a famílias em situação de vulnerabilidade e incentivo ao voluntariado e à participação comunitária.</p>
            </div>

            <div class="box-container">
                <i class="fa-solid fa-earth-americas"></i>
                <h3>Sustentabilidade</h3>
                <p>Contribuímos para o meio ambiente ao incentivar a reutilização de materiais e diminuir o desperdício.</p>
            </div>
        </div>

       </div>
    </div>



    <div class="section-faça-parte">
        <div class="txt-h1">
            <h1>Faça Parte!</h1>
            <h3>Abrace a Inclusão!</h3>
        </div>

        <div class="btn-doar">
            <button>DOE JÁ</button>
        </div>
    </div>

        <Footer/>
        </>
    )
}

export default ComoDoar
