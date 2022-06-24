import Buttons from "../../Component/Buttons";
import InputText from "../../Component/InputText";
function Login() {
    return (
        <>
            <div className ="flex items-center justify-center bg-fondoPrincipal  h-screen">
                < div className ="text-center">
                    <img alt =" Logo app" className=" h-[300px] w-[300px] ml-10 mr-10 mb-3"src="https://i.postimg.cc/PJ0RkZqJ/logo512.png"/>
                    <div className="">
                        <InputText placeHolder ="Correo" Type="email" ></InputText>
                    </div>

                    <div>
                        <InputText placeHolder ="Contraseña" Type="password" ></InputText>
                    </div >
                        <div className="mb-5">
                            <Buttons text="Ingresar"/>
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