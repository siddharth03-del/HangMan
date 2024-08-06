import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import Background from "./assets/Images/background.svg"
import Logo from "./assets/Images/logo.svg"
function Homepage(){
    const navigate = useNavigate();
    function startgame(){
        navigate("/startgame");
    }
    return(
        <div className="w-screen h-screen flex flex-col items-center bg-center" style={{backgroundImage:`url(${Background})`}}>
            <div style={{backgroundImage:`url(${Logo})`}} className="h-44 w-80 mt-10">
                
            </div>
            <div className="mt-10">
                <Button sytleType="startgame" text="Start" id="start-game" type="button" clickevent={startgame}/>
            </div>
        </div>
    )
}
export default Homepage