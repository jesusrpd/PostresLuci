import Image from "next/image";

export default function Servicios(){

    return(
    <section id="servicios" className="my-10 lg:my-20">
        <h2 className="text-3xl font-bold text-center">Servicios</h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-10 md:flex-wrap">
            <div className="shadow-xl w-3/4 md:w-4/12 h-96 rounded-2xl my-5 lg:w-3/12 xl:w-2/12">
                <div className="h-2/4 bg-card-postre bg-cover bg-no-repeat">
                </div>
                <div className="h-2/4 p-2">
                    <h3 className="text-2xl font-bold text-center">Postres</h3>
                    <p>Selecciona el postre de tu preferencia o haz una orden presonalizada del postre que desearías que hicieramos.</p>
                </div>
            </div>
            <div className="shadow-xl w-3/4 md:w-4/12 h-96 rounded-2xl my-5 lg:w-3/12 xl:w-2/12">
                <div className="h-2/4 bg-card-comida bg-cover bg-no-repeat">
                </div>
                <div className="h-2/4 p-2">
                    <h3 className="text-2xl font-bold text-center">Comida tradicional</h3>
                    <p>Somos expertos en la preparación de comida mexicana tradicional, puedes pedir alguna comida de las que tenemos en el sitio o hacer un pedido especial a tu antojo.</p>
                </div>
            </div>
            <div className="shadow-xl w-3/4 md:w-4/12 h-96 rounded-2xl my-5 lg:w-3/12 xl:w-2/12">
                <div className="h-2/4 bg-card-manualidad bg-cover bg-no-repeat">
                </div>
                <div className="h-2/4 p-2">
                    <h3 className="text-2xl font-bold text-center">Manualidades</h3>
                    <p>También podemos preparar la fiesta perfecta para tu familia o para una situación especial. Mandanos mensaje para preparar el evento de tus sueños.</p>
                </div>
            </div>
        </div>
    </section>
    )
}