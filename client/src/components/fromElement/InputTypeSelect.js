function InputTypeSelect({value,setValue}) {
    return ( 
        <>
            <b><span>Book Condition *</span></b>
            <select name="Book Condition" style={{"height": "40px", "width": "100px", "font-size": "15px"}} id="" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
            </select>
        </>
     );
}

export default InputTypeSelect;