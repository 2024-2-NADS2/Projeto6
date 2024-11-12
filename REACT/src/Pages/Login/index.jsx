import { Link } from 'react-router-dom'
import './index.css'

function Login(){
    return(
        <>
        <div className="body">

            <div className="container">
                <div className="container-img">
                    <img src="Logo.png" alt="Logo Projeto" />
                </div>

                <div className="container-form">
                    <h3>Login</h3>

                    <div className="form">
                        <div className="div-input">
                            <label for="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                        </div>

                        <div class="div-input">
                            <label for="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                        </div>

                        <div className="div-button">
                            <button>Entrar</button>
                            <a href="/cadastro">Novo aqui? Cadastre-se</a>
                        </div>
                    </div>

                </div>
            </div>





        </div>


        </>
    )
}

export default Login
