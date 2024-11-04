import { Link } from 'react-router-dom'
import './index.css'

function Login(){
    return(
        <>
            <div class="login-container-wraper">


<div class="login-container">

    <div class="form-img">
        <img src="Logo.png" alt="logo do projeto"/>
    </div>

    <div class="form">
        <div class="txt-form">
            <h1>Login</h1>
        </div>
        
        <div class="form-list">
            <form action="#">

                <div class="div-input">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                </div>

                <div class="div-input">
                    <label for="password">Senha</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                </div>

                <div class="btn-entrar">
                    <button>Entrar</button>
                    <Link to="/cadastro">Cadastre-se</Link>
                </div>

                

            </form>
        </div>

    </div>
</div>


</div>
        </>
    )
}

export default Login
