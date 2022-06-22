function Buttons (props) {
    return (
        <>
        <button className= {` mt-3 h-[48px]  w-7/12 sm:w-96 rounded-md bg-${props.colorB || "fondoBotonesA"} text-${props.colorText || "text-black"} text-lg font-bold`}>{props.text}</button>
        </>
    );

}

export default Buttons;