"use client"

import Image from "next/image";
import { useEffect } from "react";
import AboutUs from "./components/aboutus";
import Servicios from "./components/servicios";
import Galery from "./components/galery";
import Questions from "./components/questions";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Main from "./components/main";
import Videos from "./components/videos";

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

        <a href="https://wa.me/5544923181/?text=¡Hola!%20Me%20gustaría%20un%20pedido" target="_blank">
          <Image src="/icons/whatsapp.svg" alt="background header" width={70} height={70} className="fixed right-3 bottom-4 z-50"/>
        </a>

    <Nav/>
    <Main/>
    <AboutUs/>
    <Servicios/>
    <Videos/>
    <section className="w-full bg-slate-950 py-20 px-5  text-white text-center">
        <p className="font-bold text-3xl mb-10">¡HAZ TU PEDIDO HOY MISMO!</p>
        <a href="https://wa.me/5544923181/?text=¡Hola!%20Me%20gustaría%20un%20pedido" className="p-5 font-bold text-white bg-red-500 rounded-md">¡Ordenar ahora!</a>
    </section>
    <Questions/>
    <Footer/>

    </div>
  );
}
