function InputText (props) {
    return(
    <input
    placeholder={props.placeHolder} type={props.Type}
    className="placeholder:text-gray pl-4 h-[48px] sm:w-96 rounded-md p-4 w-full"
    value={props.values}
    onChange={props.fOnChange}
    //}}
/>
    );
}


export default InputText;

