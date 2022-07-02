function Buttons (props) {
    return (
        <>
        <button className= {`flex justify-center gap-2 items-center my-2 h-[48px] p-5 w-68 sm:w-95 rounded-md text-lg font-bold ${props.colorB || "bg-projectMustard"} ${props.colorText || "text-black"} text-lg font-bold`}>{props.icon}{props.text}</button>
        </>
    );

}

export default Buttons;