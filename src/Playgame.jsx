import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "./MaskedText";
import Keypad from "./Keypad";
import { useState } from "react";
import { Checkwin } from "./checkwin";
import Hangman from "./Hangman";
import Background from "./assets/Images/background.svg"
import Dialog from "./Dialog";
function Playgame(){
    const location = useLocation();
    const navigate = useNavigate();
    const wordselected = location.state.word;
    const [usedletters, updateusedletters] = useState([]);
    const [win, setwin] = useState(false)
    const [level, setlevel] = useState(0);
    function KeypadHandler(event){
        const key = event.target.value;
        if(!usedletters.includes(key)){
            let arr = structuredClone(usedletters);
            arr.push(key);
            updateusedletters(arr);
        const btn = event.target;
        btn.classList.remove("bg-white");
        btn.classList.add("bg-blue-300");
        setwin(Checkwin(wordselected, arr));
        if(!wordselected.toUpperCase().split("").includes(key)){
            setlevel( level + 1 )
        }
        }
    }
    function WinHandler(){
        console.log("winhandler")
        navigate('/startgame');
    }
    return(
        <div className="relative">
        <div className="flex h-screen w-screen flex-col z-0 absolute" style={{backgroundImage:`url(${Background})`}}>
        <MaskedText text={wordselected}  usedletters={usedletters}/>
            <div className="flex flex-row mt-10">
                <Keypad clickhandler={KeypadHandler}/>
                <Hangman level={level}/>
            </div>
            <div className="h-20 w-96 mt-2 ml-13">
                <h1 className="text-red-600 text-2xl font-bold"> Chances remaining {7 - level} out of 7</h1>
            </div>
        </div>
        {win? <Dialog clickhandler={WinHandler} text="You Won"/>: null}
        {level == 7 ? <Dialog clickhandler={WinHandler} text="You Lost"/>: null}
        </div>
    )
}
export default Playgame;