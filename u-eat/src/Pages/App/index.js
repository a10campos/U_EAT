import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Component/PrivateRoute";
import Register from "../Register";
import RestaurantInfo from "../RestaurantInfo";
import Login from "../Login";
import Perfil from "../Perfil";
import RegisterRest from "../RegisterRest";
import MainPage from "../MainPage";
import Review from "../Review";
import ReviewSent from "../ReviewSent";
import Location from "../Location";


export default function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<MainPage/>}></Route>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path ="location" element={<Location/>}></Route>
      <Route path="restaurants/:id" element={<RestaurantInfo/>}></Route>
      <Route element={<PrivateRoute/> }>
        <Route path ="registerRest" element={<RegisterRest/>}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path ="restaurants/:id/review" element={<Review/>}></Route>
        <Route path ="reviewSent" element={<ReviewSent/>}></Route>
      </Route>
    </Routes>
</BrowserRouter>
);

};

