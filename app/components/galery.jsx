import Image from "next/image";

export default function Galery(){
    return(
        <section id="galery" className="w-full min-h-screen mt-20">
            <h2 className="text-3xl md:text-5xl mb-20aml-20 font-bold text-center md:text-left lg:mb-10 md:ml-10">Galería de servicios</h2>
            <div className="items-center justify-around flex-col md:flex-row lg:flex">
                <div className="md:w-2/4 w-4/5 bg-card-ice h-72 md:h-96 bg-cover relative bg-no-repeat md:mx-20 m-auto rounded-lg shadow-xl hover:scale-105 cursor-pointer transition-all">
                    <Image
                        src={"/icons/descarga-arrow.png"}
                        alt="arrow"
                        width={30}
                        height={30}
                        className="-rotate-90 absolute top-6 right-8"
                    />
                    <h3 className="text-white mt-10 ml-10 text-3xl">Postres Irresistibles</h3>
                </div>
                <div className="md:w-2/4 w-4/5 h-72 bg-card-nuts md:h-96 bg-cover relative bg-no-repeat m-auto md:mx-20 rounded-lg shadow-xl hover:scale-105 cursor-pointer transition-all">
                    <Image
                        src={"/icons/descarga-arrow.png"}
                        alt="arrow"
                        width={30}
                        height={30}
                        className="-rotate-90 absolute top-6 right-8"
                    />
                    <h3 className="text-white mt-10 ml-10 text-3xl">Gelatinas sorprendentes</h3>
                </div>
            </div>
        </section>
    )
}