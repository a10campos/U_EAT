import Header from "../../Component/Header"
import Buttons from "../../Component/Buttons";
import UserInfoCard from "../../Component/UserInfoCard";
import {BsFillExclamationCircleFill} from "react-icons/bs"
function Perfil (){
    return(
        <>
        <Header/>
            <UserInfoCard/>
            <div className="flex items-center justify-center w-screen">
                <div className="text-center">
                    <div>
                        <Buttons colorB="bg-fondoBotonG" colorText="text-black" text="Informacion"/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" colorText="text-black" text="Cambiar ubicación"/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" colorText="text-black" text="Agregar restaurante"/>
                    </div>
                    <Buttons colorB="bg-fondoBotonG" colorText="text-black" text="Salir"></Buttons>
                </div>
            </div>
                <button className="flex items-center "><BsFillExclamationCircleFill className="mr-2"/>Información </button>
        </>

    );
}
export default Perfil;