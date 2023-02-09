
function InputTypeText({inputName,type,placeholder,required,value,setValue}) {
    if(required) {
        inputName = `${inputName} *`
    }
    return ( 
        <>
            <b><span>{inputName}</span></b>
            <input type={type} name="" class="box" placeholder={placeholder} required={required} id="" value={value} onChange={(e) => setValue(e.target.value)}/>
        </>
     );
}

export default InputTypeText;