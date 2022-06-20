function Login() {

    return (
        <>
            <div className ="flex items-center justify-center bg-fondoPrincipal  h-screen">
                < div className ="text-center">
                    <img className=" h-[300px] w-[300px] m-10"src="https://i.postimg.cc/PJ0RkZqJ/logo512.png"/>
                    <div className="">
                        <input
                        placeholder = "Correo"
                        className="p-5 placeholder:text-black h-[48px] rounded-md w-full"
                        /> 
                    </div>

                    <div className="mb-4">
                        <input
                        placeholder = "Contraseña"
                        className= "mt-5 p-5 placeholder:text-black h-[48px] rounded-md w-full"
                        type="password"
                        />
                    </div>
                    <button className="bg-fondoBotonesA rounded-md h-[48px] w-full mt-5 mb-10">Ingresar</button>
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