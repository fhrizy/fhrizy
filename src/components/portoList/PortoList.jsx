import "./portoList.scss"

export default function PortoList({id, title, active, setSelected}) {
    return (
        <li className={active ?"portoList active" : "portoList"} 
        onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
