import Buttons from "../Buttons";

function InputButton (props) {
    return (
        <>
            <div className="relative flex-wrap ">
                <input className="mt-3 absolute cursor-pointer  h-[48px] w-full opacity-0" type="file" accept=".pdf,image/*"></input>
                <Buttons colorB={props.buttonColor} text={props.textButton}/>
            </div>

        </>
    );
}
export default InputButton;