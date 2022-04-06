import "./internship.scss";

export default function Internship() {

    const data = [
        {
            id: 1,
            nama: "PT. Enseval Putera Megatrading",
            title: "as IT Support at 2016",
            desc: "maintenance Company Website, software and hardware. i also configuration company LAN",
            image: "assets/download.png",
        },
        {
            id: 2,
            nama: "PT. Lumbung Riang Communication",
            title: "as Technician Support at 2020",
            desc: "migration traffic from radio signal to fiber optic",
            image: "assets/lrc.png",
            featured:true,
        },
    ];

    return (
        <div className="internship" id="internship">
            <h1>Intership</h1>
            <div className="container">
                {data.map((p)=>(
                <div className={p.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={p.image} className="user" alt="" />
                    </div>
                    <div className="center">
                        {p.desc}
                    </div>
                    <div className="bottom">
                        <h3>{p.nama}</h3>
                        <h4>{p.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    )
}
