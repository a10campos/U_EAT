function InputText (props) {
    return(
    <input
    placeholder={props.placeHolder} type={props.Type}
    className="placeholder:text-black pl-4 h-[48px] w-7/12 sm:w-96 rounded-md mt-2"
     //value={username}
    //onChange={(evt) => {
    //    setUsername(evt.target.value);
    //}}
/>
    );
}


export default InputText;

