function Buttons (props) {
    return (
        <>
        <button className= {`justify-center items-center my-2 h-[60px] p-1 w-[180px] sm:w-95 rounded-md text-lg font-bold ${props.colorB || "bg-projectMustard"} ${props.colorText || "text-black"} text-lg font-bold`}
        onClick={props.onClick}
        >{props.icon}{props.text}</button>
        </>
    );

}

export default Buttons;