import { Keypadarray } from "./KeypadUtlity";
function Keypad({clickhandler}){
    const keys = Keypadarray();
    return(
        <div className="mt-10 w-3/5 ml-10">
            {keys.map((key, index)=>{
                return(
                    <button className="h-16 w-16 border-4 border-blue-600 rounded-2xl bg-white mx-3 my-3 hover:bg-blue-300" id={`${key}-${index}`} key={`${key}-${index}`} value={key} onClick={()=>{
                        clickhandler(event);
                    }}>{key}</button>
                )
            })}
        </div>
    )
}
export default Keypad;