import Header from "../../Component/Header"
import Buttons from "../../Component/Buttons";
import ButtonsIcons from"../../Component/ButtonIcons";
import UserInfoCard from "../../Component/UserInfoCard";
import {ImExit,ImPlus,ImLocation} from "react-icons/im";
import {useDispatch} from "react-redux";
import {logout} from "../../Slices/userSlice";
import {useNavigate} from "react-router-dom";


function Perfil (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return ( 
        <>
        <Header/>
            <UserInfoCard/>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <div>
                        <ButtonsIcons colorB="bg-fondoBotonG" text="Informacion de la cuenta" icon={<ImPlus className=" text-xl"/>}/>
                    </div>
                    <div>
                        <ButtonsIcons colorB="bg-fondoBotonG" text="Cambiar Ubicacion" icon={<ImLocation className=" text-xl"/>}/>
                    </div>
                    <div>
                        <ButtonsIcons colorB="bg-fondoBotonG" text="Agregar Restaurante" onClick={()=>navigate("/RegisterRest")} icon={<ImPlus className=" text-xl"/>}/>
                    </div>
                    <ButtonsIcons colorB="bg-fondoBotonG" text="Salir" onClick={()=>dispatch (logout())} icon={<ImExit className=" text-xl" />}/>
                </div>
            </div>
        </>

    );
}
export default Perfil;