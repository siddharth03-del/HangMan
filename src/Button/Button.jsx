import ButtonStyle from "./ButtonStyling";
function Button({sytleType, text, id, clickevent, type}){
    return(
        <button type={type} id={id} className={ButtonStyle(sytleType)} value={text} onClick={()=>{clickevent()}}>
            {text}
        </button>
    )
}
export default Button;