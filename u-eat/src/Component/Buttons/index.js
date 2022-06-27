function Buttons (props) {
    return (
        <>
        <button className= {`mt-3 h-[48px]  w-11/12 sm:w-96 rounded-md ${props.colorB || "bg-fondoBotonesA"} ${props.colorText || "text-black"}  font-bold`}>{props.icon}<p className="">{props.text}</p></button>
        </>
    );

}

export default Buttons;