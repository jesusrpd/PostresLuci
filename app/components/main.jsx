export default function Main(){
    return(
    <section id="main" className="relative w-full text-white h-screen bg-hero-main-mobile lg:bg-hero-main-desktop bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold z-10 my-5">Postres Luci</h1>
        <h2 className="z-10 my-5 text-2xl lg:text-3xl font-bold">¡Dulzura a tu puerta!</h2>
        <p className="z-10 my-5 text-center md:text-2xl lg:text-3xl font-bold px-5 leading-10 text-2xl">Postres y gelatinas personalizadas para cualquier ocasión.</p>
        <button className="z-10 my-5 font-bold md:text-2xl text-white bg-red-600 p-2 rounded-3xl px-4">Ver Menú</button>

        <a className="arrow" href="#aboutus">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </section>
    )
}