import { Routes,Route } from "react-router-dom"
import Home from "../components/Home/Home"
import Home2 from "../components/Home/Home2"
import Layout from "../components/other/layout/layout"
import Admin from "../components/Admin/Admin"
import FormularioTrabajador from "../components/Gestiocuidadores/FormularioTrabajador"
import ListaTrabajadores from "../components/Gestiocuidadores/ListaTrabajadores"

const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home2' element={<Home2 />}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/FormularioTrabajador' element={<FormularioTrabajador />}></Route> 
        <Route path='/ListaTrabajadores' element={<ListaTrabajadores />}></Route>
      </Routes>
    )
  }
  
  export default AllRoutes