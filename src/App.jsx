import { Route, Routes } from "react-router-dom";
import Playgame from "./Playgame";
import Startgame from "./Startgame";
import Homepage from "./Homepage";
function App(){
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/playgame" element={<Playgame/>}/>
      <Route path="/startgame" element={<Startgame/>}/>
    </Routes>
  )
}
export default App;