import Image from "next/image";

export default function Servicios(){

    const servicios = [
        {
            title: "Postres",
            description: "Selecciona el postre de tu preferencia o haz una orden presonalizada del postre que desearías que hicieramos.",
            img: "donas.jpg"
        },
        {
            title: "Comida tradicional",
            description: "Somos expertos en la preparación de comida mexicana tradicional, puedes pedir alguna comida de las que tenemos en el sitio o hacer un pedido especial a tu antojo.",
            img:"chiles.jpeg"
        },
        {
            title: "Manualidades",
            description:"También podemos preparar la fiesta perfecta para tu familia o para una situación especial. Mandanos mensaje para preparar el evento de tus sueños.",
            img: "piñata.jpeg"
        }
    ]

    return(
    <section id="servicios" className="my-10">
        <h2 className="text-3xl font-bold text-center">Servicios</h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-10 md:flex-wrap">
        {servicios.map((s, i) => (
            <div key={i} className="shadow-xl w-3/4 md:w-4/12 h-96 rounded-2xl my-5 lg:w-3/12">
                <div className="h-2/4">
                    <Image
                        src={`/img/${s.img}`}
                        alt="img postre"
                        width={100}
                        height={100}
                        className="w-full h-full rounded-t-2xl"
                    />
                </div>
                <div className="h-2/4 p-2">
                    <h3 className="text-2xl font-bold text-center">{s.title}</h3>
                    <p>{s.description}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
    )
}