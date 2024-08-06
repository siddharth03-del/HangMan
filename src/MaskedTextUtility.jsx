function GetAllCharacters(text, usedletters){
    const array = [];
    for(let i = 0; i < usedletters.length; i++){
        array.push(usedletters[i].toUpperCase());
    }
    const characters = text.toUpperCase().split("");
    const newarray = [];
    console.log(array, "getallcharacters");
    characters.forEach(element => {
        (array.includes(element)?newarray.push(element):newarray.push("_"))
    });
    return newarray;
}
export default GetAllCharacters