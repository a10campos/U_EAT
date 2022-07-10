import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {registerUser} from "../../Slices/userSlice";
import {Navigate} from "react-router-dom";


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

    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);
    const dispatch = useDispatch();

    return userIsLoggedIn ?(
        <>
            <Navigate to = "/MainPage"/>
        </>
    ):(
        //<div style={{height: '100vh', background: 'red'}}/>
        //<div className= "h-100 bg-theBlue"> Register</div>
        //<div className= " bg-theBlue" style={{height: '100vh'}}> Register</div> SIRVE
        
        <>
       
        <div className= " flex items-center justify-center h-screen bg-projectBlue">
          
            <div className="text-center w-screen">
                <div className=" mb-20">
                    <h1 className="text-3xl font-bold text-white">Registro</h1>
                </div>


                <div className="mb-4">
                    <input
                        placeholder="Nombre"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={name}
                        onChange = {(evt) => {setName(evt.target.value);}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Apellido"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={lastName}
                        onChange = {(evt) => {setLastName(evt.target.value);}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Correo"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={email}
                        onChange = {(evt) => {setEmail(evt.target.value);}}
                    />
                </div>
            
                <div className="mb-4">
                    <input
                        placeholder="Usuario"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={username}
                        onChange = {(evt) => {setUsername(evt.target.value);}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Teléfono"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={telephone}
                        onChange = {(evt) => {setTelephone(evt.target.value);}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Contraseña"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        value={password}
                        onChange = {(evt) => {setPassword(evt.target.value);}}
                    />
                </div>
                <div className=" flex flex-col items-center">
                    {errorMessage && (<p id="mensajeError" className="text-white mt-14 invisible">{errorMessage}</p>)}
                    <button className="mt-2 h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold"
                        onClick={() => { dispatch(registerUser({
                            name, lastName, email, username, telephone, password
                        }));
                        document.getElementById("mensajeError").className = " text-white visible mt-14";
                        navigate("/Login")
                        }}
                            
                            /*
                            if (username && password) {
                            if (password.length < 8) {
                                setLocalErrorMessage("La contraseña debe contener al menos 8 dígitos.");                
                            }
                            else {
                                setLocalErrorMessage("");
                                dispatch(
                                postLogin({
                                    username,
                                    password,
                                })
                                );
                            }
                            }
                            else {
                            setLocalErrorMessage("Debe completar todos los campos");
                            }
                        */
                    >
                        Registrarse
                    </button>
                    <div className="flex mt-2 mx-4">
                    <a href="/register" className="text-white text-xl no-underline hover:underline ...">
                        ¿Ya tiene una cuenta? Inicie sesión aquí</a>                     
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