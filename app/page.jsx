"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            if(window.scrollY > 0){
                nav.classList.add('sticky')
            }else{
                nav.classList.remove('sticky')
            }
        })

        var menu = document.querySelector(".hamburger");

        // method   
        function toggleMenu(event) {
        this.classList.toggle("is-active");
        document.querySelector(".menuppal").classList.toggle("is_active");
        event.preventDefault();
        }

        // event
        menu.addEventListener("click", toggleMenu, false);
    },[])

  return (
    <div>
      <nav id="navbar" className="justify-around items-center px-10 bg-transparent pt-14 text-white fixed top-0 w-screen transition-all z-20 flex">
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="LuciPostres"
            width={100}
            height={100}
            className="rounded-full z-40"
          />
          <p className="ml-5 font-bold text-2xl z-40">LuciPostres</p>
        </div>
        <div className="hamburger">
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
        </div>
        <ul className="flex items-center menuppal flex-col justify-center">
          <li className="mx-5 mb-10">Postres Deliciosos</li>
          <li className="mx-5 mb-10">Gelatinas Creatinas</li>
          <li className="mx-5 mb-10">Conoce nuestros servicios</li>
          <li className="mx-5 p-3 bg-red-500 text-white font-bold hover:bg-transparent border-2 border-red-500  rounded-md transition-all cursor-pointer">¡Haz tu Pedido!</li>
        </ul>
      </nav>
    <section className="relative w-full text-white h-screen bg-hero-main bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full absolute bg-black opacity-50"></div>
        <h1 className="text-6xl font-bold z-10 my-5">Postres Luci</h1>
        <h2 className="z-10 my-5">¡Dulzura a tu puerta!</h2>
        <p className="z-10 my-5 text-center">Postres y gelatinas personalizadas para cualquier ocasión.</p>
        <button className="z-10 my-5 underline font-bold">Ver Menú</button>

        <div className="arrow absolutem-auto">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </section>
    <section className="w-full min-h-screen mt-20">
        <h2 className="text-2xl md:text-5xl mb-20aml-20 font-bold text-center md:text-left ">Galería de Delicias</h2>
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
    <section className="w-full bg-gray-500 p-20 text-white text-center">
        <p className="font-bold text-3xl mb-5">¡HAZ TU PEDIDO HOY MISMO!</p>
        <button className="p-5 font-bold text-white bg-red-500 rounded-md">¡Ordenar ahora!</button>
    </section>
    <section className="w-full min-h-screen mt-20">
        <h2 className="font-bold text-center text-3xl mb-16">Nuestros servicios</h2>
        <div className="md:flex-row lg:flex flex-col items-center justify-around">
            <div className="text-center">
                <Image
                    src={"/services/personalizado.jpg"}
                    alt="img service"
                    width={200}
                    height={200}
                    className="mb-10 m-auto"
                />
                <hr />
                <p className="font-bold my-5 text-2xl">$20 Usd</p>
                <h3 className="text-2xl font-bold mb-5">Postre perzonalizado</h3>
                <p className="mb-5 text-center">Crea tu propio postre con los sabores que amas.</p>
                <a href="" className="underline-offset-4 underline">¡Ordenar ahora!</a>
            </div>
            <div className="text-center">
                <Image
                    src={"/services/fiesta.jpg"}
                    alt="img service"
                    width={200}
                    height={200}
                    className="mb-10 m-auto"
                />
                <hr />
                <p className="font-bold my-5 text-2xl">$15 Usd</p>
                <h3 className="text-2xl font-bold mb-5">Gelatina temática</h3>
                <p className="mb-5">Gelatinas decoradas para cualquier ocasión especial.</p>
                <a href="" className="underline-offset-4 underline">¡Ordenar ahora!</a>
            </div>
            <div className="text-center">
                <Image
                    src={"/services/tematica.jpg"}
                    alt="img service"
                    width={200}
                    height={200}
                    className="mb-10 m-auto"
                />
                <hr />
                <p className="font-bold my-5 text-2xl">$30 Usd</p>
                <h3 className="text-2xl font-bold mb-5">Postre perzonalizado</h3>
                <p className="mb-5">Incluye variedad de postres para eventos grandes.</p>
                <a href="" className="underline-offset-4 underline">¡Ordenar ahora!</a>
            </div>
        </div>
    </section>
    <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
            <div className="border border-gray-300 rounded-md">
            <button
                type="button"
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            >
                <span className="text-lg font-medium">¿Cuál es el tiempo de entrega?</span>
                <svg
                className="w-5 h-5 transform transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </button>
            <div className="hidden px-4 py-2 text-gray-700">
                El tiempo de entrega es de 3 a 5 días hábiles, dependiendo de la
                complejidad del pedido.
            </div>
            </div>

            <div className="border border-gray-300 rounded-md">
            <button
                type="button"
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            >
                <span className="text-lg font-medium">¿Hacen pedidos personalizados?</span>
                <svg
                className="w-5 h-5 transform transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </button>
            <div className="hidden px-4 py-2 text-gray-700">
                Sí, realizamos pedidos personalizados según tus necesidades. Contáctanos
                para más información.
            </div>
            </div>

            <div className="border border-gray-300 rounded-md">
            <button
                type="button"
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            >
                <span className="text-lg font-medium">¿Aceptan pagos en línea?</span>
                <svg
                className="w-5 h-5 transform transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </button>
            <div className="hidden px-4 py-2 text-gray-700">
                Sí, aceptamos pagos a través de plataformas seguras como PayPal y
                transferencias bancarias.
            </div>
            </div>
        </div>
        </section>
    <footer className="w-full bg-gray-300 p-20">
        <div className="md:flex-row lg:flex items-start justify-around flex-col">
            <h2 className="font-bold text-6xl">Postres Luci</h2>
            <div>
                <ul className="list-disc">
                <li>Servicios</li>
                <li>Postres</li>
                <li>Ordena</li>
                <li>Contacto</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>Todos los derechos reservados por el autor.</p>
    </footer>
    </div>
  );
}
