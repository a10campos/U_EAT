function Buttons (props) {
    return (
        <>
        <button className= {` my-2 h-[48px] w-48 sm:w-96 rounded-md text-lg font-bold ${props.colorB || "bg-projectMustard"} ${props.colorText || "text-white"} text-lg font-bold`}>{props.text}</button>
        </>
    );

}

export default Buttons;