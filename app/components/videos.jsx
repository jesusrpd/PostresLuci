import Image from "next/image";

export default function Videos(){
    return(
        <>
        <div className="container">
        <div className="horizontal">
        {/* <!--     <div className="card"></div> --> */}
            <Image src="/img/comidas/enchiladas.jpeg" alt="1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
        </div>
        <div className="vertical"><Image src="/img/comidas/espagueti.jpeg" alt="2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="horizontal"><Image src="/img/comidas/hotdog.jpg" alt="3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="big"><Image src="/img/comidas/pambazo.jpeg" alt="4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="vertical"><Image src="/img/comidas/enchiladas.jpeg" alt="5" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/manualidades/carro.jpeg" alt="6" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="vertical"><Image src="/img/manualidades/gato.jpeg" alt="7" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/manualidades/biberon.jpeg" alt="8" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/postres/flan.jpeg" alt="8.1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/postres/gelatina.jpeg" alt="9" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="big"><Image src="/img/postres/gelatinas.jpeg" alt="10" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/postres/tamales.jpeg" alt="11" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="horizontal"><Image src="/img/comidas/carne.jpg" alt="12" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div><Image src="/img/comidas/pollo.jpeg" alt="12.1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        <div className="horizontal"><Image src="/img/comidas/mixiote.jpeg" alt="13" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/></div>
        </div>
        {/* <div className="searchDiv"><Image src="https://i.dlpng.com/static/png/255423_preview.png" width={50} height={50} alt=""/></div> */}
        </>
    )
}