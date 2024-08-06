import GetAllCharacters from "./MaskedTextUtility";
function MaskedText({text, usedletters}){
    const letters = GetAllCharacters(text, usedletters);
    return (
        <div className="mt-10 mx-auto">
        {letters.map((letter, index)=>{
            return (
                <span className="inline-block mx-1 text-5xl text-yellow-500" key={`${letter}-${index}`}>{letter}</span>
            )
        })}
        </div>
    )
}
export default MaskedText;