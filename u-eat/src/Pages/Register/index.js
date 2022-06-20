import {Link, Routes, Route, useNavigate} from 'react-router-dom';


//agregar use states para poder guardar el input del usuario

//agregar selectors, creo que el profe lo usa para setear el dark y light theme


//Falta agregar si hay algun error, ej: si un usuario ya esta tomado etc.

//hacer que el boton haga algo y mandar el post

export default function Register() {
    const navigate = useNavigate();
    return (
        //<div style={{height: '100vh', background: 'red'}}/>
        //<div className= "h-100 bg-theBlue"> Register</div>
        //<div className= " bg-theBlue" style={{height: '100vh'}}> Register</div> SIRVE
        <div className= " flex items-center justify-center h-screen bg-projectBlue">
            <div className="text-center w-screen">
                <div className=" mb-20">
                    <h1 className="text-3xl font-bold text-white">Registro</h1>
                </div>


                <div className="mb-4">
                    <input
                        placeholder="Nombre"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Apellido"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Correo"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>
            
                <div className="mb-4">
                    <input
                        placeholder="Usuario"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Teléfono"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>

                <div className="mb-4">
                    <input
                        placeholder="Contraseña"
                        className={`placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md `}
                        //value={username}
                        //onChange={(evt) => {
                        //    setUsername(evt.target.value);
                        //}}
                    />
                </div>

                <button className=" mt-14 h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectmustard text-white text-lg font-bold"
                    onClick={() => {
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
                    }}
                >
                    Registrarse
                </button>

                <button className=" mt-14 h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectmustard text-white text-lg font-bold" onClick={() => navigate(-1)}>Go back 1 Page</button>

            </div>
        </div>
    )
  }



/*
  <div className= "text-white text-center">
  Registro
</div>
*/