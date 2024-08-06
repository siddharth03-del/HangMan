import TextInput from "./TextInput";
import Button from "./Button/Button";
function TextInputForm({handleFormSubmit, handleTextInputChange, value, InputType, setInputType}){
    return(
        <form action="" onSubmit={handleFormSubmit} className="flex items-end">
            <div className="w-8/12">
                <TextInput label="Enter the word" type={InputType} value={value} onChange={handleTextInputChange}/>
            </div>
            <div className="mb-2 pt-1 mr-5">
                <Button sytleType="show" text={InputType=="password"?"Show":"Hide"} id="show-hide" clickevent={setInputType} type="button"/>
            </div>
            <div className="mb-2 ml-5 pt-1">
                <Button sytleType="submit" text="Submit" id="Submit" type="submit"/>
            </div>
        </form>
    )
}
export default TextInputForm;