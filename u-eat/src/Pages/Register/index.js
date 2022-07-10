import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {registerUser, logout} from "../../Slices/userSlice";
import {Navigate} from "react-router-dom";
import InputText from "../../Component/InputText";
import Buttons from "../../Component/Buttons";


//agregar use states para poder guardar el input del usuario

//agregar selectors, creo que el profe lo usa para setear el dark y light theme


//Falta agregar si hay algun error, ej: si un usuario ya esta tomado etc.

//hacer que el boton haga algo y mandar el post

export default function Register() {
    const navigate = useNavigate();
    const [name,setName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email,setEmail] = useState ("");
    const [username, setUsername] = useState ("");
    const [telephone,setTelephone] = useState ("");
    const [password, setPassword] = useState ("");

    const dispatch = useDispatch();

    useEffect(()=>{
          dispatch(logout());
      },[dispatch]);

    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

    return userIsLoggedIn ?(
        <>
            <Navigate to = "/"/>
        </>
    ):(
        //<div style={{height: '100vh', background: 'red'}}/>
        //<div className= "h-100 bg-theBlue"> Register</div>
        //<div className= " bg-theBlue" style={{height: '100vh'}}> Register</div> SIRVE
        
        <>
       
        <div className= " flex items-center justify-center h-screen bg-projectBlue w-screen">
          
            <div className="flex flex-col mt-10 items-center text-center w-7/12 space-y-4">
                <div className=" mb-20">
                    <h1 className="text-3xl font-bold text-white">Registro</h1>
                </div>
                <InputText placeHolder ="Nombre" Type="text" values={name}  fOnChange = {(evt) => {setName(evt.target.value);}}/>

                <InputText placeHolder ="Apellido" Type="text" values={lastName}  fOnChange = {(evt) => {setLastName(evt.target.value);}}/>

                <InputText placeHolder ="Correo" Type="email" values={email}  fOnChange = {(evt) => {setEmail(evt.target.value);}}/>
            
                <InputText placeHolder ="Usuario" Type="text" values={username}  fOnChange = {(evt) => {setUsername(evt.target.value);}}/>

                <InputText placeHolder ="Teléfono" Type="text" values={telephone}  fOnChange = {(evt) => {setTelephone(evt.target.value);}}/>

                <InputText placeHolder ="Contraseña" Type="password" values={password}  fOnChange = {(evt) => {setPassword(evt.target.value);}}/>

                <div className=" flex flex-col items-center">
                    {errorMessage && (<p id="mensajeError" className="text-white mt-14 ">{errorMessage}</p>)}
                    <Buttons colorB="bg-fondoBotonesA "text="Ingresar"
                        onClick={() => { dispatch(registerUser({
                            name, lastName, email, username, telephone, password
                        }));
                        //document.getElementById("mensajeError").className = " text-white visible mt-14";
                        //navigate("/Login")}
                        }}
                    />
                    <div className="flex mt-8 mx-4 ">
                    <a href="/login" className="text-white text-xl no-underline hover:underline ...">
                        <div>¿Ya tiene una cuenta?</div>
                        <div>Inicie sesión aquí</div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }



/*
  <div className= "text-white text-center">
  Registro
</div>
*/