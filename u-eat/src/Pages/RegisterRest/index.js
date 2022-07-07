import Select from "react-select";
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import Buttons from "../../Component/Buttons";
import InputButton from "../../Component/InputButtons";
import InputText from "../../Component/InputText";
import {registRest} from "../../Slices/userSlice";

const options = [
    {value:"Rapida", label:"Rapida"},
    {value:"Mexicana", label:"Mexicana"},
    {value:"Tipica", label:"Tipica"},
    {value:"China", label:"China"},
    {value:"Vegetariana",label: "Vegetariana"}

];
function RegisterRest({
}) {

    const [nameRest,setNameRest] = useState ("");
    const [email,setEmail] = useState ("");
    const [celRest,setCelRest] = useState ("");
    const [rangePrice,setRangePrice] = useState ("");
    const errorMessage = useSelector((state) => state.user.errorMessage);
    const dispatch = useDispatch();

    return(
        <> 
            <div className="flex items-center justify-center bg-fondoPrincipal h-screen">
                <div className="text-center">
                    <h1 className="text-4xl mt-10 mb-5 text-white"><b>Registrar <br></br>Restaurante</b></h1>
                    <div>
                        <InputText placeHolder = "Nombre del resturante" values={nameRest} fOnChange={(evt) => {setNameRest(evt.target.value);}}/>
                    </div>
                    <div>
                        <InputText placeHolder = "Correo" values={email} fOnChange={(evt) => {setEmail(evt.target.value);}}/>
                    </div>
                    <div>
                        <InputText placeHolder = "Telefono" Type="Tel"  values={celRest} fOnChange={(evt) => {setCelRest(evt.target.value);}}/>
                    </div>
                    <Select className="mt-2" closeMenuOnSelect={false}
                    isMulti
                    options={options}/>
                    <div>
                        <InputText placeHolder = "Horarios" />
                    </div>
                    <div>
                        <InputText placeHolder = "Rango Precios" values={rangePrice} fOnChange={(evt) => {setRangePrice(evt.target.value);}} />
                    </div>
                    <div>
                        <InputButton buttonColor="bg-white" textButton ="Agregar Menu"/>
                    </div>
                        <InputButton buttonColor="bg-white" textButton ="Agregar Foto"/>
                        {errorMessage && (<p className="text-white mt-2">{errorMessage}</p>)}
                    <div>
                        <Buttons text="Registrar"onClick={()=> { dispatch(registRest({
                                nameRest,email,celRest,rangePrice
                            }));}}/>
                    </div>
                </div>
            </div>
        </>
    );

}
export default  RegisterRest;