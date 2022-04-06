import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Internship from "./components/internship/Internship";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections"> 
          <Intro/>
          <Portfolio/>
          <Certification/>
          <Internship/>
          <Contact/>
       </div>
    </div>
  );
}

export default App;
