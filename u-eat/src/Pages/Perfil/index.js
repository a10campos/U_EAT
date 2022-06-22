import Buttons from "../../Component/Buttons";
import UserInfoCard from "../../Component/UserInfoCard";
function Perfil (){
    return(
        <>
            <UserInfoCard/>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <div>
                        <Buttons colorB="fondoBotonG" text="Informacion de la cuenta"/>
                    </div>
                    <div>
                        <Buttons colorB="fondoBotonG" text="Cambiar Ubicacion"/>
                    </div>
                    <div>
                        <Buttons colorB="fondoBotonG" text="AgregarRestaurante"/>
                    </div>
                    <Buttons colorB="fondoBotonG" text="Salir"/>
                </div>
            </div>
        </>
    );
}
export default Perfil;