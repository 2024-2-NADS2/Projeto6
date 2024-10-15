import './footer.css'

function Footer(){
    return(
        <>
<div class="footer-section">
        <div class="footer-container">

            <div class="footer-img">
                <a href="#"><img class="img-logo-footer" src="Logo.png" alt="Logo do projeto"/></a>
            </div>

            <div class="footer-nav">
                <nav>
                    <ul>
                        <li><a href="#">QUEM SOMOS</a></li>
                        <li><a href="#">SERVIÇOS</a></li>
                        <li><a href="#">COMO DOAR</a></li>
                        <li><a href="#">PARCEIROS</a></li>
                        <li><a href="#">PONTOS DE COLETA</a></li>
                        <li><a href="#">MÍDIAS</a></li>      
                        <li><a href="#">PARCEIROS</a></li>
                        <li><a href="#">TRANSPARÊNCIA</a></li>
                        <li><a href="#">CONTATO</a></li>
                        <li><a href="#">EXPANSÃO</a></li>
                    </ul>
                </nav>
            </div>

            <div class="footer-icons">
                <div class="box-icons">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div class="box-icons">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="box-icons">
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>


            <div class="footer-rights">
                <p>ECO-MATERIALIZE &copy; 2024 - Todos os direitos reservados.</p>
            </div>

        </div>
    </div>
        </>
    )
}

export default Footer
