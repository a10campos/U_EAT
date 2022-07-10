import Select from "react-select";
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import Buttons from "../../Component/Buttons";
import InputButton from "../../Component/InputButtons";
import InputText from "../../Component/InputText";
import PopUp from "../../Component/PopUp";
import {registRest,createProduct} from "../../Slices/userSlice";
import Header from "../../Component/Header";

const options = [
    {value:"Rapida", label:"Rapida"},
    {value:"Mexicana", label:"Mexicana"},
    {value:"Tipica", label:"Tipica"},
    {value:"China", label:"China"},
    {value:"Vegetariana",label: "Vegetariana"}

];
function RegisterRest({
}) {
    const [restuarantPicture,setProductPicture] = useState(null);
    /*const [product, setProduct] = useState({
        name: "",
        description:"",
        price:0,
        picture: "",
    })*/
    const [nameRest,setNameRest] = useState ("");
    const [email,setEmail] = useState ("");
    const [celRest,setCelRest] = useState ("");
    const [rangePrice,setRangePrice] = useState ("");
    const [country,setCountry] = useState ("");
    const [province,setProvince] = useState ("");
    const [university,setUniversity] = useState ("");

    const errorMessage = useSelector((state) => state.user.errorMessage);
    const success = useSelector((state) => state.user.success);
    const dispatch = useDispatch();
    /*const handleChange = (field,value)=>{
        setProduct({
            ...product,
            [field]:value,
        });
    };*/
    return(
            <> 
            <Header></Header>
            {success ? (
                <PopUp/>

            ) : (
            <div className="flex items-center justify-center bg-fondoPrincipal h-screen">
                <div className="text-center">
                    <h1 className="text-4xl  mb-5 text-white"><b>Registrar <br></br>Restaurante</b></h1>
                    <div>
                        <InputText placeHolder = "Nombre" values={nameRest} fOnChange={(evt) => {setNameRest(evt.target.value);}}/>
                    </div>
                    <div>
                        <InputText placeHolder = "Correo" values={email} fOnChange={(evt) => {setEmail(evt.target.value);}}/>
                    </div>
                    <div>
                        <InputText placeHolder = "Telefono" Type="Tel"  values={celRest} fOnChange={(evt) => {setCelRest(evt.target.value);}}/>
                    </div>
                    <div>

                    </div>
                    <div>
                        <InputText placeHolder = "Rango Precios" values={rangePrice} fOnChange={(evt) => {setRangePrice(evt.target.value);}} />
                    </div>
                    <div>
                        <InputText placeHolder = "Pais" values={country} fOnChange={(evt) => {setCountry(evt.target.value);}} />
                    </div>
                    <div>
                        <InputText placeHolder = "Provincia" values={province} fOnChange={(evt) => {setProvince(evt.target.value);}} />
                    </div>
                    <div>
                        <InputText placeHolder = "Universidad" values={university} fOnChange={(evt) => {setUniversity(evt.target.value);}} />
                    </div>
                    <div>
                        <InputButton buttonColor="bg-white" colorText="black" textButton ="Agregar Menu"/>

                    </div>
                        <InputButton fOnChange={(evt) => 
                        setProductPicture(evt.target.files[0])} buttonColor="bg-white" colorText="black" textButton ="Agregar Foto"/>
                        {errorMessage && (<p className="text-white mt-2">{errorMessage}</p>)}
                        {restuarantPicture && (
                            <img className=" justify-center [h-200px] w-[200px]" alt="restPhoto" src={URL.createObjectURL(restuarantPicture)}/>
                        )}
                    <div>
                        <Buttons text="Registrar"onClick={()=> { dispatch(registRest({
                                nameRest,email,celRest,rangePrice,country,province,university,restuarantPicture
                            }));}}/>
                    </div>
                </div>
            </div>
             )}
        </>
    );
}
export default  RegisterRest;