import Buttons from "../../Component/Buttons";
import UserInfoCard from "../../Component/UserInfoCard";
import {BsFillExclamationCircleFill} from "react-icons/bs"
function Perfil (){
    return ( 
        <>
            <UserInfoCard/>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Informacion de la cuenta"/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Cambiar Ubicacion"/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Agregar Restaurante"/>
                    </div>
                    <Buttons colorB="bg-fondoBotonG" text="Salir" icon={<BsFillExclamationCircleFill className=" text-2xl"/>}/>
                </div>
            </div>
        </>

    );
}
export default Perfil;