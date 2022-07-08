import {BrowserRouter,Route,Routes} from "react-router-dom";
import PrivateRoute from "../../Component/PrivateRoute";
import Register from "../Register";
import RestaurantInfo from "../RestaurantInfo";
import Login from "../Login"
import Perfil from "../Perfil"
import RegisterRest from "../RegisterRest";
import MainPage from "../MainPage";
import Review from "../Review";
import Location from "../Location";

export default function App() {

  return(

  <BrowserRouter>
      <Routes>
        <Route path ="/" element={<MainPage/>}></Route>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="location" element={<Location/>}></Route>
        <Route path="/restaurantInfo" element={<RestaurantInfo/>}></Route>
        <Route element={<PrivateRoute/> }>
          <Route path ="registerRest" element={<RegisterRest/>}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path ="review" element={<Review/>}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
);

};

