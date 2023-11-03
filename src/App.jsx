import { IconContext } from "react-icons";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <IconContext.Provider value={{ color:'white' }}>
      <Home/>
    </IconContext.Provider>
  )
}