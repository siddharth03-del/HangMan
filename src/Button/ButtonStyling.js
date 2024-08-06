function ButtonStyle(Styletype){
    if(Styletype == 'option'){
        return "h-14 w-56 border-blue-600 border-4 rounded-2xl text-blue-400 font-mono font-bold text-3xl mr-4 hover:bg-blue-200"
    }
    else if(Styletype == "reset"){
        return "h-10 w-32 border-4 border-red-600 rounded-xl bg-red-300 font-mono text-white font-bold text-lg"
    }
    else if(Styletype == "okay"){
        return "h-10 w-32 border-4 border-red-600 rounded-xl bg-red-300 font-mono text-white font-bold text-lg"
    }
    else if(Styletype == 'submit'){
        return "h-12 w-32 border-4 border-blue-600 rounded-xl text-white text-2xl"
    }
    else if(Styletype == 'startgame'){
        return "h-16 w-40 border-4 border-pink-400 rounded-3xl bg-red-200 text-white font-bold text-3xl"
    }
    else if(Styletype == "keypad"){
        return "h-20 w-20 border-4 border-blue-600 rounded-2xl bg-blue-200"
    }
    else if(Styletype == "show"){
        return "h-12 w-32 border-4 border-blue-600 rounded-2xl text-white text-2xl mt-4"
    }
}
export default ButtonStyle;