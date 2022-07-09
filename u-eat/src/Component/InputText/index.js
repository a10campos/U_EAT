function InputText (props) {
    return(
    <input
    placeholder={props.placeHolder} type={props.Type}
    className="placeholder:text-gray pl-4 h-[48px] w-11/12 sm:w-96 rounded-md mt-2 p-4"
    value={props.values}
    onChange={props.fOnChange}
    //}}
/>
    );
}


export default InputText;

