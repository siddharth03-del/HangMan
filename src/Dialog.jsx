function Dialog({clickhandler, text}){
    return (
        <div className="w-2/5 h-64 border-4 rounded-3xl border-blue-800 absolute z-10 mt-40 ml-96 bg-blue-400 pt-14 pl-32">
            <h1 className="text-blue-600 text-5xl font-mono font-extrabold">{text}</h1>
            <button className="w-40 h-14 border-4 border-blue-800 text-white font-mono font-bold text-2xl rounded-2xl mt-10 ml-2 bg-blue-300" onClick={()=>{clickhandler()}}>
                Play Again
            </button>
        </div>
    )
}
export default Dialog;