export default function Footer(){
    return(
        <footer id="footer" className="w-full bg-footer bg-cover p-20 relative">
        <div className="md:flex-row lg:flex items-start justify-around flex-col text-white">
            <h2 className="font-bold text-4xl mb-10">Postres Luci</h2>
            <div>
                <ul className="list-disc">
                <li>Servicios</li>
                <li>Postres</li>
                <li>Ordena</li>
                <li>Contacto</li>
                </ul>
            </div>
        </div>
        <hr className="my-5 z-20"/>
        <p className="text-white z-50">Todos los derechos reservados por el autor.</p>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
    </footer>
    )
}