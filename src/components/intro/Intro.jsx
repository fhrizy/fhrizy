import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 10, 
            strings: ["developer.", "editor." ] 
        })
    }, []);
    return (
        <div className="intro" id="intro">
           <div className="left">
                <div className="imageContainer">
                    <img src="assets/profile.png" alt="" />
                </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>hi there, i'm</h2>
                   <h1>Mohamad Fichar Rozy</h1>
                   <h3>fresh graduate <span ref={textRef}></span></h3>
               </div>
               <a href="#portfolio">
                    <img src="assets/arrow.png" alt="" />
                    </a>
           </div>
        </div>
    )
}
