import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import Doar from "./Pages/Doar"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import Coleta from "./Pages/Coleta"



function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/sobre" element={ <Sobre/> }></Route>
                <Route path="/como doar" element={ <Doar/> }></Route>
                <Route path="/pontos coleta" element={ <Coleta/> }></Route>
                <Route path="/contato" element={ <Contact/> }></Route>
                <Route path="/login" element={ <Login/> }></Route>
                <Route path="/cadastro" element={ <Cadastro/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
