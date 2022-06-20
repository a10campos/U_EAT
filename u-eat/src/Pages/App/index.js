import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../Home";
import Register from "../Register";
import RestaurantRegister from "../RestaurantRegister";
import RestaurantInfo from "../RestaurantInfo";
import Login from "../Login"
import Perfil from "../Perfil"
import RegisterRest from "../RegisterRest";

export default function App() {

  return(

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="restaurant_register" element={<RestaurantRegister />}/>
        <Route path="restaurant_info" element={<RestaurantInfo />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Perfil" element={<Perfil/>}></Route>
        <Route path ="RegisterRest" element={<RegisterRest/>}></Route>
      </Routes>
  </BrowserRouter>
);

};

