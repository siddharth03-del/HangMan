import TextInputForm from "./TextInputForm";
import { useState } from "react";
function TextInputFormContainer({onSubmit}){
    const [value, setValue] = useState("");
    const [InputType, setInputType] = useState("password");
    function handleFormSubmit(event){
        console.log(event);
        event.preventDefault();
        console.log(value);
        onSubmit(value);
    }
    function handleTextInputChange(event){
        console.log(value);
        setValue(event.target.value);
    }
    function showhide(){
        if(InputType == "password"){
            setInputType("text");
        }
        else{
            setInputType("password");
        }
    }
    return(
        <TextInputForm handleFormSubmit={handleFormSubmit} handleTextInputChange={handleTextInputChange}
        value={value}
        InputType={InputType}
        setInputType={showhide}
        />
    )
}
export default TextInputFormContainer;