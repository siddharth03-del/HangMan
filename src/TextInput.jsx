function TextInput({label, type, value, onChange}){
    return(
        <label className="flex flex-row mt-20 ml-1">
            {label && <span className="text-white text-lg font-mono font-bold w-40 pt-4"> {label} </span>}
            <input className="w-8/12 h-14 rounded-xl border-4 border-blue-500 placeholder:font-bold text-xl pl-2 focus:border-green-600" type={type} value={value} onChange={onChange} placeholder={label}></input>
        </label>
    )
}
export default TextInput;