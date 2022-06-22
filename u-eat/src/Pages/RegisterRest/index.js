import Select from "react-select";
import Buttons from "../../Component/Buttons";
import InputButton from "../../Component/InputButtons";
import InputText from "../../Component/InputText";
const options = [
    {value:"Rapida", label:"Rapida"},
    {value:"Mexicana", label:"Mexicana"},
    {value:"Tipica", label:"Tipica"},
    {value:"China", label:"China"},
    {value:"Vegetariana",label: "Vegetariana"}

];

function RegisterRest({

}) {
    return(
        <> 
            <div className="flex items-center justify-center bg-fondoPrincipal h-screen">
                <div className="text-center">
                    <h1 className="text-2xl mt-10 mb-5 text-white"><b>Registrar <br></br>Restaurante</b></h1>
                    <div>
                        <InputText placeHolder = "Nombre del resturante"/>
                    </div>
                    <div>
                        <InputText placeHolder = "Correo"/>
                    </div>
                    <div>
                        <InputText placeHolder = "Telefono" Type="Tel"/>
                    </div>
                    <Select className="mt-2" closeMenuOnSelect={false}
                    isMulti
                    options={options}/>
                    <div>
                        <InputText placeHolder = "Horarios"/>
                    </div>
                    <div>
                        <InputText placeHolder = "Rango Precios"/>
                    </div>
                    <div>
                        <InputButton buttonColor="white" textButton ="Agregar Menu"/>
                    </div>
                        <InputButton buttonColor="white" textButton ="Agregar Foto"/>
                    <div>
                        <Buttons text="Registrar"/>
                    </div>
                </div>
            </div>
        </>
    );

}
export default  RegisterRest;