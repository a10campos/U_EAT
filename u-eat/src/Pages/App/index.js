import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../Home";
import Register from "../Register";
import RestaurantRegister from "../RestaurantRegister";
import RestaurantInfo from "../RestaurantInfo";

export default function App() {

  return(

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="restaurant_register" element={<RestaurantRegister />}/>
        <Route path="restaurant_info" element={<RestaurantInfo />}/>
      </Routes>
  </BrowserRouter>
);

};

