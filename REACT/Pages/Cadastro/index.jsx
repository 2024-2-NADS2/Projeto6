import { Link } from 'react-router-dom'
import './index.css'

function Cadastro(){
    return(
        <>
            <div class="body-container">

<div class="container-cadastro">

    <div class="form-img">
        <img src="Logo.png" alt="imagem do formulario"/>
    </div>

    
    <div class="form">
        <form action="#">
            <div class="form-header">
                <div class="form-title">
                    <h1>Cadastre-se</h1>
                </div>
                <div class="loggin-button">
                    <button id="botao-entrar" onclick="window.location.href ='login.html'"><Link to="/login">Entrar</Link></button>
                </div>
            </div>

            

            <div class="input-group">

                <div class="input-box">
                    <label for="firstname">Primeiro nome</label>
                    <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" />
                </div>

                <div class="input-box">
                    <label for="lastname">Sobrenome</label>
                    <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" />
                </div>

                <div class="input-box">
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu email" />
                </div>

                <div class="input-box">
                    <label for="number">Celular</label>
                    <input id="number" type="number" name="number" placeholder="(xx) xxxx-xxxx" />
                </div>

                <div class="input-box">
                    <label for="password">Senha</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha"/>
                </div>

                
                <div class="input-box">
                    <label for="password">Confirme sua senha</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha"/>
                </div>
            </div>

            <div class="genero-inputs">
                <div class="genero-title">
                    <h6>Gênero</h6>
                </div>

                <div class="genero-group">
                    <div class="genero-input">
                        <input type="radio" id="female" name="gender"/>
                        <label for="female">Feminino</label>
                    </div>

                    <div class="genero-input">
                        <input type="radio" id="male" name="gender"/>
                        <label for="male">Masculino</label>
                    </div>

                    <div class="genero-input">
                        <input type="radio" id="others" name="gender"/>
                        <label for="others">Outros</label>
                    </div>

                    <div class="genero-input">
                        <input type="radio" id="none" name="gender"/>
                        <label for="none">Prefiro não dizer</label>
                    </div>
                </div>
            </div>

            <div class="continue-button">
                <button><a href="#">Continuar</a></button>
            </div>

        </form>
    </div>
</div>



</div>
        </>
    )
}

export default Cadastro
