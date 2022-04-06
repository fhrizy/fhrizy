import "./certification.scss";
import {useState} from "react";

export default function Certification() {

    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
        {
            id: "1",
            icon: "assets/certif.png",
            title: "TOEIC",
            desc: "Listening and Reading Official Institutional Score Report is in the name of Mohamad Fichar Rozy with a score of 590.",
            image:"assets/tuik.jpg"
        },
        {
            id: "2",
            icon: "assets/certif.png",
            title: "Intermediate Computer Network Technician",
            desc: "On behalf of BNSP State Polytechnic of Jakarta Professional Certification Body",
            image: "assets/network.jpg"
        },
    ];

    const handleClick = (way)=>{
        way === "kiri" 
        ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 1) 
        : setCurrentSlider(currentSlider < data.length -1 ? currentSlider +1 : 0);
    };
    return (
        <div className="certification" id="certification">
            <h1>certification</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlider *100}vw)`}}>
                {data.map ((d)=>(

                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />

                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Certification</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.image} alt="" />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            <img src="assets/arrow.png" alt="" className="terus kanan" onClick={()=>handleClick()}/>
            <img src="assets/arrow.png" alt="" className="terus kiri" onClick={()=>handleClick("kiri")}/>
        </div>
    );
}
