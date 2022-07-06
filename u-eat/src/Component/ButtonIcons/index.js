function ButtonsIcons (props) {
    return (
        <>
        <button className= {`flex justify-center gap-2 items-center my-2 h-[55px] p-5 w-[250px] sm:w-95 rounded-md text-lg font-bold ${props.colorB || "bg-projectMustard"} ${props.colorText || "text-black"} text-lg font-bold`}
        onClick={props.onClick}
        >{props.icon}{props.text}</button>
        </>
    );

}

export default ButtonsIcons;