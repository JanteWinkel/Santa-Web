import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
    return (
        <div id="contacto" className="max-w-6xl px-4 mt-16 mx-auto sm:px-6 lg:px-8">
             <h1 className=" text-5xl text-primary font-extrabold uppercase text-center">
                    Contacto
                </h1>
            <h2 className="mb-5 text-3xl font-bold text-primary text-center mt-8">¡Hola! ¡Los Elfos de Santa están aquí para ayudarte! 🎅🏻🎄</h2>
            <h3 className="text-xl text-black dark:text-white">Si tienes alguna duda sobre las mágicas sorpresas de Santa o si quieres pedir algo especial, ¡no dudes en escribirnos! Nuestros elfos están listos para atenderte. Puedes contactarnos por WhatsApp o enviar un mensaje directo en Instagram. ¡Nos encanta hacer realidad tus deseos navideños! ✨</h3>
            <div className="max-w-md mx-auto  justify-center items-center gap-8 mt-5">
                <div className="mb-5 flex items-center justify-center gap-4">
                    <a href="https://wa.me/+584141885117" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-6xl text-secondary" />
                    </a>
                    <a href="https://instagram.com/santaclausquerido" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-6xl text-secondary" />
                    </a>
                </div>
            </div>
        </div>
    )
}
 
export default Contacto;