function Buttons (props) {
    return (
        <>
        <button className= {` mt-3 h-[48px]  w-11/12 sm:w-96 rounded-md ${props.colorB || "bg-fondoBotonesA"} ${props.colorText || "text-black"} text-lg font-bold`}>{props.text}</button>
        </>
    );

}

export default Buttons;