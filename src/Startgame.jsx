import {useNavigate } from "react-router-dom";
import TextInputFormContainer from "./TextInputFormContainer";
import Background from "./assets/Images/background.svg"
function Startgame(){
    const navigate = useNavigate();
    function onSubmit(value){
        console.log(value);
        navigate('/playgame',{state:{word: value}});
    }
    return(
        <div className="w-screen h-screen" style={{backgroundImage:`url(${Background})`}}>
            <div className="pt-9 pl-72">
                <h1 className="text-3xl text-white font-bold ">
                    Enter the word of your choice
                </h1>
            </div>
            <div>
                <TextInputFormContainer onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
export default Startgame;