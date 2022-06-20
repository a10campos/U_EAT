import Select from "react-select";
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
            <div className="flex items-center justify-center bg-fondoPrincipal">
                <div className="text-center">
                    <h1 className="text-xl mt-10 mb-5 text-white">Registrar Restaurante</h1>
                    <div>
                        <input
                        placeholder="Nombre del restaurante"
                        className="rounded-md text-fondoPrincipal p-2 mb-3"
                        ></input>
                    </div>
                    <div>
                        <input
                        placeholder="Correo"
                        className="rounded-md text-fondoPrincipal p-2 mb-3"
                        ></input>
                    </div>
                    <div>
                        <input
                        placeholder="Telefono" type ="tel"
                        className="rounded-md text-fondoPrincipal p-2 mb-3"
                        ></input>
                    </div>
                    <Select
                    className="mb-3"
                    closeMenuOnSelect={false}
                    isMulti
                    options={options}/>
                    <div>
                        <input className="rounded-md text-fondoPrincipal p-2 mb-3" placeholder = "Horarios"></input>
                    </div>
                    <div>
                        <input className="rounded-md text-fondoPrincipal p-2 mb-3"placeholder = "Rango Precios"></input>
                    </div>
                    <div className="mb-3 ">
                        <button className="bg-colorBotonGris w-full h-[48px] rounded-md">Agregar Menu</button>
                    </div>
                    <div className="mb-3">
                        <button className="bg-colorBotonGris w-full h-[48px] rounded-md">Agregar Foto</button>
                    </div>
                    <div className="mb-15">
                            <button className="bg-fondoBotonesA w-full h-[48px] rounded-md"> Registrar</button>
                    </div>
                </div>
            </div>
        </>
    );

}
export default  RegisterRest;