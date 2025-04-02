import Image from "next/image";

export default function AboutUs(){
    return(
        <section id="aboutus" className="p-5 flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:my-10">
            <div className="lg:w-2/4">
                <h2 className="font-bold text-center text-3xl mb-5">¿Quién soy?</h2>
                <p className="font-medium leading-8 text-justify text-2xl flex flex-col items-center lg:items-start">¡Hola! Soy Lucía, una apasionada de la cocina y las manualidades. Me encanta dedicar mi tiempo a explorar nuevas recetas y preparar platillos tradicionales llenos de sabor, así como postres creativos y deliciosos que sorprendan a todos. Además, disfruto diseñar decoraciones y detalles únicos para fiestas, desde globos y piñatas hasta adornos personalizados, siempre con un toque de perfección y mucha dedicación. Mi mayor satisfacción es crear momentos especiales que llenen de alegría y sabor cada celebración.<br/><br/>
                <a href="#videos" className="text-red-500 underline text-center">Ver mis postres y más</a>
                </p>
            </div>
        
            <Image
                src={"/img/lucia.png"}
                alt="Luci"
                width={300}
                height={300}
                className="mt-10"
            />
        </section>
    )
}