/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
const Eventos = () => {
    const images = [
        { id: 1, src: "/eventos/familiares.jpeg", alt: "Eventos familiares", evento: "Familiares" },
        { id: 2, src: "/eventos/escolares.jpeg", alt: "Eventos escolares", evento: "Escolares" },
        { id: 3, src: "/eventos/corporativos.jpeg", alt: "Eventos corporativos", evento: "Corporativos" },
        { id: 4, src: "/eventos/sesiones-fotograficas.jpeg", alt: "Sesiones Fotográfica", evento: "Sesiones Fotográficas" },
    ];

    return (
        <div id="eventos" className='max-w-6xl  mt-16 mx-auto sm:py-6 sm:px-8'>
            <h2 className=" text-5xl text-primary font-extrabold uppercase text-center">
                    Tipos de Eventos 
                </h2>
            <div className='grid gap-6 mt-8 sm:grid-cols-4 grid-cols-1'>
                {images.map((image) => (
                    <div key={image.id} className="relative mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                        />
                        <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{image.evento}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Eventos;
