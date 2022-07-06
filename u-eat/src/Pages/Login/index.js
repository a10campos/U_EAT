import Buttons from "../../Component/Buttons";
import InputText from "../../Component/InputText";
import  {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {postLogin,logout} from "../../Slices/userSlice";
function Login() {

    const [username,setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);
    const dispatch = useDispatch();

    return userIsLoggedIn ? (
        <>
            <Navigate to = "/MainPage"/>

            <button className="bg-fondoBotonesA"
            onClick= {()=>dispatch (logout())}>Salir</button>
        </>
    ):(
        <>
            <div className ="flex items-center justify-center bg-fondoPrincipal  h-screen">
                < div className ="text-center">
                    <img alt =" Logo app" className=" h-[300px] w-[300px] ml-10 mr-10 mb-3"src="https://i.postimg.cc/PJ0RkZqJ/logo512.png"/>
                    <div className="">
                        <InputText placeHolder ="Correo" Type="email" values={username}  fOnChange = {(evt) => {setUsername(evt.target.value);}}></InputText>
                    </div>

                    <div>
                        <InputText placeHolder ="Contraseña" Type="password" values={password} fOnChange = {(evt) => {setPassword(evt.target.value);}}></InputText>
                    </div >
                        {errorMessage && (<p className="text-white mt-2">{errorMessage}</p>)}
                        <div className="mb-5 ml-auto mr-auto">
                            <Buttons colorB="bg-fondoBotonesA "text="Ingresar"
                            onClick={()=> { dispatch(postLogin({
                                username,password
                            }));}}/>
                        </div>
                    <div className="text-white ">
                        <p className="mb-2">¿Olvido su Contraseña?</p>
                        <p>¿No se ha registrado? Registrate aqui</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;