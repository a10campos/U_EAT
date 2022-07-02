import Header from "../../Component/Header"
import Buttons from "../../Component/Buttons";
import UserInfoCard from "../../Component/UserInfoCard";
import {ImExit,ImPlus,ImLocation} from "react-icons/im"
function Perfil (){
    return ( 
        <>
        <Header/>
            <UserInfoCard/>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Informacion de la cuenta" icon={<ImPlus className=" text-2xl"/>}/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Cambiar Ubicacion" icon={<ImLocation className=" text-2xl"/>}/>
                    </div>
                    <div>
                        <Buttons colorB="bg-fondoBotonG" text="Agregar Restaurante" icon={<ImPlus className=" text-2xl"/>}/>
                    </div>
                    <Buttons colorB="bg-fondoBotonG" text="Salir" icon={<ImExit className=" text-2xl"/>}/>
                </div>
            </div>
        </>

    );
}
export default Perfil;