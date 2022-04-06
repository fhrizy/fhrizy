import PortoList from "../portoList/PortoList";
import "./portfolio.scss"
import {useEffect, useState} from "react";
import {featured, webApp, androidApp, design, editing} from "../../Data"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "featured",
        },
        {
            id: "web",
            title: "web",
        },
        {
            id: "android",
            title: "android",
        },
        {
            id: "design",
            title: "design",
        },
        {
            id: "editing",
            title: "editing",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featured);
                break;
            case "web":
                setData(webApp);
                break;
            case "android":
                setData(androidApp);
                break;
            case "design":
                setData(design);
                break;
            case "editing":
                setData(editing);
                break;
                default:
                    setData(featured);
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortoList title={item.title} 
                    active={selected === item.id}  
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
