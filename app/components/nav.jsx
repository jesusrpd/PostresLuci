"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!navRef.current) return;
            if (window.scrollY > 0) {
                navRef.current.classList.add("sticky-class");
            } else {
                navRef.current.classList.remove("sticky-class");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar para móviles */}
            <nav className="sticky top-0 flex justify-around items-center w-full bg-black-elote py-5 z-50 md:hidden">
                <div className="flex items-center logo-mobile">
                    <Image
                        src="/img/logo.png"
                        width={50}
                        height={50}
                        className="mr-3"
                        alt="logo The Elote Co"
                    />
                    <p className="text-white font-bold text-2xl">LuciPostres</p>
                </div>

                {/* Botón hamburguesa */}
                <div className={`hamburger ${isMenuOpen ? "is-active" : ""}`} onClick={toggleMenu}>
                    <div className="_layer -top"></div>
                    <div className="_layer -mid"></div>
                    <div className="_layer -bottom"></div>
                </div>

                {/* Menú móvil */}
                <ul className={`menuppal ${isMenuOpen ? "is_active flex flex-col items-center justify-center" : "hidden"}`}>
                    <li className="mb-10 w-fit">
                        <a href="#main" className="text-white text-center font-bold text-2xl">
                            Inicio
                        </a>
                    </li>
                    <li className="mb-10 w-fit">
                        <a href="#aboutus" className="text-white text-center font-bold text-2xl">
                            Sobre Nosotros
                        </a>
                    </li>
                    <li className="mb-10 w-fit">
                        <a href="#servicios" className="text-white text-center font-bold text-2xl">
                            Servicios
                        </a>
                    </li>
                    <li className="mb-10 w-fit">
                        <a href="#questions" className="text-white text-center font-bold text-2xl">
                            Preguntas Frecuentes
                        </a>
                    </li>
                    <li className="mb-10 w-fit">
                        <a href="#videos" className="text-white text-center font-bold text-2xl">
                            Fotos y Videos
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Navbar para pantallas grandes */}
            <nav ref={navRef} id="navbar" className="max-sm:hidden flex justify-center sticky top-0 py-4 items-center z-50">
                <ul className="flex">
                    <li className="mx-1 lg:mx-5 font-bold">
                        <a href="#main">Inicio</a>
                    </li>
                    <li className="mx-1 lg:mx-5 font-bold">
                        <a href="#aboutus">Sobre nosotros</a>
                    </li>
                    <li className="mx-1 lg:mx-5 font-bold">
                        <a href="#servicios">Servicios</a>
                    </li>
                </ul>
                <Image
                    src="/img/logo.png"
                    width={70}
                    height={70}
                    className="mx-3 md:mx-2 rounded-full lg:mx-3"
                    alt="logo The Elote Co"
                />
                <ul className="flex">
                    <li className="mx-1 lg:mx-5 font-bold">
                        <a href="#questions">Preguntas Frecuentes</a>
                    </li>
                    <li className="mx-1 lg:mx-5 font-bold">
                        <a href="#videos">Fotos y Videos</a>
                    </li>
                    <li className="mx-1 lg:mx-5 font-bold bg-red-elote p-1 rounded-2xl px-4 text-white">
                        <a
                            href="https://wa.me/5544923181/?text=¡Hola!%20Me%20gustaría%20un%20pedido"
                            target="_blank"
                        >
                            Cotizar
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
