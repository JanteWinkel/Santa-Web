/* eslint-disable @next/next/no-img-element */
// SantaSightings.tsx

const Empresas = () => {
    // Array de patrocinadores con nombre y URL del logo
    const sponsors = [
        { name: 'La Vela', logoUrl: '/empresas/la-vela.png' },
        { name: 'La Isla', logoUrl: '/empresas/la-isla.png' },
        { name: 'Opticolor', logoUrl: '/empresas/opticolor.png' },
        { name: 'LD Hoteles', logoUrl: '/empresas/ld-hoteles.png' },
        { name: 'Mundo Total', logoUrl: '/empresas/mundo-total.png' },
        { name: 'Farmacia tu Igualdad', logoUrl: '/empresas/farmacia-tu-igualdad.jpeg' },
        { name: 'Tijerazo', logoUrl: '/empresas/tijerazo.png' },
        { name: 'The Crepp Maker', logoUrl: '/empresas/crepp.png' },
    ];

    return (
        <div className="santa-sightings-container max-w-screen-lg mx-auto mt-16 p-6 text-center">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <p className="text-gray-600 mb-6">
                Estas empresas han apoyado los avistamientos de Santa 🎅🏻. ¡Agradecemos su colaboración!
            </p>
            
            <div className="sponsors-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="sponsor-logo bg-transparent rounded-lg p-3 shadow-lg">
                        <img
                            src={sponsor.logoUrl}
                            alt={`Logo de ${sponsor.name}`}
                            width={100} 
                            height={100} 
                            className="object-contain w-full h-full rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Empresas;
