import Select from "react-select";
const countries = [
    {value:"Costa Rica", label:"Costa Rica"},
    {value:"México", label:"México"},
    {value:"Estados Unidos", label:"Estados Unidos"},
];

const states = [
    {value:"San José", label:"San José"},
    {value:"Alajuela", label:"Alajuela"},
    {value:"Heredia", label:"Heredia"},
];

const universities = [
    {value:"Universidad de Costa Rica", label:"Universidad de Costa Rica"},
    {value:"Universidad Latina", label:"Universidad Latina"},
    {value:"Universidad Hispanoamericana", label:"Universidad Hispanoamericana"},
];

function Location() {

    return (
        <>
           <div className= "items-center justify-center h-screen bg-projectBlue">
            <div>
                    <img class=" h-[300px] w-[300px] m-10"src="https://i.postimg.cc/PJ0RkZqJ/logo512.png" alt="logo"/>
                </div>
                <div class="mx-10 my-3">
                    <Select  closeMenuOnSelect={false}  options={countries}/>
                </div>
                <div class="mx-10 my-3">
                    <Select closeMenuOnSelect={false}  options={states}/>
                </div>
                <div class="mx-10 my-3">
                    <Select closeMenuOnSelect={false}  options={universities}/>
                </div>
                <div class="mx-10 my-3">
                    <button className="bg-projectMustard text-white text-xl font-bold rounded-md h-[48px] w-full mt-5 mb-10">
                        Aceptar
                    </button>
                </div>
            </div>
        </>

    );
}

export default Location;