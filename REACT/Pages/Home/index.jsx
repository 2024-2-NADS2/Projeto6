import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import './index.css'
import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <Header/>
        <div class="main">
        <div class="main-box">
            <h1>UM LIVRO MUDA A VIDA</h1>
            < Link to="/como doar" className="button">DOE AGORA</Link>
        </div>
    </div>

    <div class="div-txt">
        <h3>Somos todos responsáveis por todos, caminhando no sentido de uma convivência mais humana.</h3>
    </div>





    <div class="section-selos">
        <div class="selos">
            <a href="#"><img class="selo-transparencia" src="Selo Transparencia.png" alt="Selos do projeto"/></a> 
            <a href="#"><img class="selo-direitos" src="Selo direitos humanos.png" alt="Selos do projeto"/></a> 
        </div>

        <div class="h1">
            <h1>Pilares que Sustentam Nossa Jornada por Educação e Sustentabilidade</h1>
        </div>


        <div class="container-valores">
            <div class="valores-box">
                <a href="#"><img src="Icone-Familia.png" alt="Ícone família"/></a>
                <h3>Família</h3>
            </div>

            <div class="valores-box">
                <a href="#"><img src="icone-voluntario.png" alt="Ícone voluntario"/></a>
                <h3>Voluntários</h3>
            </div>

            <div class="valores-box">
                <a href="#"><img src="Icone-doação.png" alt="Ícone doação"/></a>
                <h3>Doações</h3>
            </div>

            <div class="valores-box">
                <a href="#"><img src="Icone-educação.png" alt="Ícone educação"/></a>
                <h3>Educação</h3>
            </div>
        </div>
    </div>



    <div class="section-sobre-nos">
        <div class="txt-h1">
            <h1>Eco Materialize - Brasil</h1>
        </div>

        <div class="txt-h3">
            <h3>O Eco-Materialize nasceu para transformar a educação e o meio ambiente. Conectamos pessoas por meio da troca de materiais escolares e do voluntariado, criando uma rede de solidariedade. Pequenas ações geram grandes mudanças, construindo um futuro mais justo e sustentável para todos.</h3>
        </div>

        <div class="btn-saiba-mais">
            <Link to="/sobre">
            <button>SAIBA MAIS</button>
            </Link>
        </div>

        <div class="galeria-fotos">
            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Apoiadores</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Transparência</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Vídeo Institucional</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Expansão</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Comunidades</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Canal Youtube</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Vlog</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Blog</h4>
            </div>

            <div class="box-fotos">
                <a href="#"><img src="Professora.png" alt=""/></a>
                <h4>Mídias</h4>
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

export default Home
