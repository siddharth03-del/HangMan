export function Checkwin(wordselected, usedletter){
    let word = wordselected.toUpperCase().split("");
    console.log(word);
    console.log(usedletter);
    for(let i = 0; i < word.length; i++){
        if(!usedletter.includes(word[i])){
            console.log("false returned")
            return false;
        }
    }
    console.log("true returned");
    return true;
}