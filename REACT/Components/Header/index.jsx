import './header.css'

function Header(){
    return(
        <>
<div class="header">
        <div class="header-container">
            <div class="header-img">
                <a href="#"><img class="img-logo" src="Logo.png" alt="Logo do projeto"/></a>
            </div>

            <div class="header-nav">
                <nav>
                    <ul>
                        <li><a href="#">SOBRE NÓS</a></li>
                        <li><a href="#">SERVIÇOS</a></li>
                        <li><a href="#">COMO DOAR</a></li>
                        <li><a href="#">PARCEIROS</a></li>
                        <li><a href="#">PONTOS DE COLETA</a></li>
                    </ul>
                </nav>
            </div>

            <div class="header-button">
                <button>DOAR</button>
            </div>

        </div>
    </div>
        </>
    )

}

export default Header

