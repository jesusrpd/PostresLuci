export default function Questions (){

    const questions = [
        {
            question: "¿Cuál es el tiempo de entrega?",
            response: "El tiempo de entrega es estimado dependiendo de la magnitud y complejidad del pedido, al hacer la coticzación del pedido, se asigna el tiempo de entrega estimado."
        },
        {
            question: "¿Hacen pedido personalizados?",
            response: "Claro, si no encuentras tu platillo favorito o postre en este sitio, o deseas que realicemos una manualidad en especifico, podemos adaptarnos a las necesidades del cliente."
        },
        {
            question: "¿Aceptan pagos en línea?",
            response: "Si, las formas de petodo de pago son: transferencia bancaria, pago en efectivo o pago por paypal."
        },
        {
            question: "¿Tienen locales?",
            response: "No, de momento el negocio se maneja de forma virtual, excepto en el momento de entrega del pedido se hace de forma precensial."
        },
        {
            question: "¿Don de hacen las entregas?",
            response: "Por el momento, entregamos por todo Chicago."
        }
    ]

    return(
        <section id="questions" className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
            {questions.map((q, i) =>(
            <details key={i} className="border-gray-600 border-2 rounded-lg p-2 cursor-pointer">
                <summary className="font-bold">{q.question}</summary>
                <hr />
                <p className="mt-2">{q.response}</p>
            </details>
            ))}
            </div>
        </section>
    )
}