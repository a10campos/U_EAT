import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../Home";
import Login from "../Login"
import Perfil from "../Perfil"
import RegisterRest from "../RegisterRest";


function App() {
  return(

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Perfil" element={<Perfil/>}></Route>
        <Route path ="RegisterRest" element={<RegisterRest/>}></Route>
      </Routes>
  </BrowserRouter>
);

};

export default App;
