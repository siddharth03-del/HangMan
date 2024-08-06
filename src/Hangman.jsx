import Level1 from "./assets/Images/1.svg"
import Level2 from "./assets/Images/2.svg"
import Level3 from "./assets/Images/3.svg"
import Level4 from "./assets/Images/4.svg"
import Level5 from "./assets/Images/5.svg"
import Level6 from "./assets/Images/6.svg"
import Level7 from "./assets/Images/7.svg"
import Level8 from "./assets/Images/8.svg"
function Hangman({level}){
    const array = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];
    return(
        <div className="w-2/5 h-2/5 mt-14 ml-5">
            <img src={level >= array.length - 1?array[array.length-1] : array[level]}/>
        </div>
    )
}
export default Hangman;