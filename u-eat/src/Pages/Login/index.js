import Buttons from "../../Component/Buttons";
import InputText from "../../Component/InputText";
import Header from "../../Component/Header";
import  {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Navigate,Link} from "react-router-dom";
import {postLogin,logout} from "../../Slices/userSlice";
function Login() {

    const [username,setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(!userIsLoggedIn){
            dispatch(logout());
        }
    },[dispatch, userIsLoggedIn]);


    return userIsLoggedIn ? (
        <>
            <Header></Header>
            <Navigate to = "/"/>

            <button className="bg-fondoBotonesA"
            onClick= {()=>dispatch (logout())}>Salir</button>
        </>
    ):(
        <>
            <div className ="flex flex-col items-center justify-center bg-fondoPrincipal  h-screen w-screen">
                <Link to = "/">
                <img alt =" Logo app" className=" h-[300px] w-[300px] ml-10 mr-10 mb-3"src="https://i.postimg.cc/PJ0RkZqJ/logo512.png"/>
                </Link>
                < div className ="text-center w-7/12">
                    <div className="mb-4">
                        <InputText placeHolder ="Correo" Type="email" values={username}  fOnChange = {(evt) => {setUsername(evt.target.value);}}></InputText>
                    </div>

                    <div>
                        <InputText placeHolder ="Contraseña" Type="password" values={password} fOnChange = {(evt) => {setPassword(evt.target.value);}}></InputText>
                    </div >
                    {errorMessage && (<p id="mensajeError" className="text-white mt-20">{errorMessage}</p>)}
                        
                    <Buttons colorB="bg-fondoBotonesA "text="Ingresar"
                    onClick={()=> { dispatch(postLogin({
                        username,password
                    }));
                    //document.getElementById("mensajeError").className = " text-white visible mt-2";
                    }}/>
                    <div className="text-white mt-10">
                        <a href="/register" className="text-white text-xl no-underline hover:underline ...">
                            <div>¿No tiene una cuenta?</div>
                            <div>Regístrese aquí</div>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;