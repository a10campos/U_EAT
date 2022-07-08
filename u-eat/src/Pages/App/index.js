import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import themes from "../../Utils/Theme";
import PrivateRoute from "../../Component/PrivateRoute";
import Home from "../Home";
import Register from "../Register";
import RestaurantInfo from "../RestaurantInfo";
import Login from "../Login";
import Perfil from "../Perfil";
import RegisterRest from "../RegisterRest";
import MainPage from "../MainPage";
import Review from "../Review";
import ReviewSent from "../ReviewSent";
import Location from "../Location";

export const ThemeContext = createContext(themes.dark);

export default function App() {
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themes.dark}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="MainPage" element={<MainPage />}></Route>
          <Route path="Review" element={<Review />}></Route>
          <Route path="Location" element={<Location />}></Route>
          <Route path="/RestaurantInfo" element={<RestaurantInfo />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="RegisterRest" element={<RegisterRest />}></Route>
            <Route path="/Perfil" element={<Perfil />}></Route>
            <Route path="Review" element={<Review />}></Route>
            <Route path="ReviewSent" element={<ReviewSent />}></Route>
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
