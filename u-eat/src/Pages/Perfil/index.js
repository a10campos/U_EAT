import UserInfoCard from "../../Component/Home/UserInfoCard";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
function Perfil ({

}){
    return(
        <>
            <UserInfoCard/>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <div>
                        <button className="bg-fondoBotonG w-full h-[48px] p-23 m-2 text-colorTextoAzul rounded-md">Informacion de la cuenta</button>
                    </div>
                    <div>
                        <button className="bg-fondoBotonG w-full h-[48px] p-2 m-2 rounded-md">Cambiar Ubicacion</button>
                    </div>
                    <div>
                    <button className="bg-fondoBotonG w-full h-[48px] p-2 m-2 rounded-md">Agregar Restaurante</button>
                    </div>
                    
                    <button className="bg-fondoBotonG w-full h-[48px] p-2 m-2 rounded-md">Salir</button>
                </div>
            </div>
        </>
    );
}
export default Perfil;