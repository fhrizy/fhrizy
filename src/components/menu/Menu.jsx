import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>    
                    <a href="#certification">certif</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#internship">intern</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>    
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    )
}
