export function Keypadarray(){
    const array = [];
    for(let i = 0; i < 26; i++){
        array.push(String.fromCharCode(i + 65));
    }
    return array;
}