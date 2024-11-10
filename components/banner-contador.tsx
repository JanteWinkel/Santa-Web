/* eslint-disable @next/next/no-img-element */
import CountdownToChristmas from "./CountdownToChristmas";

const BannerContador = () => {
    return (
        <div id="contador" className="flex flex-col md:flex-row items-center justify-center p-8 mt-16 md:space-x-8 bg-primary/30">
            {/* Left Side: Countdown */}
            <div className="mb-8 md:mb-0 w-full md:w-1/2 flex flex-col items-center justify-center">

                <h2 className="text-4xl font-semibold text-center text-primary mb-6 dark:text-white">
                    ¡Cuenta Regresiva! <br /> Navidad 2024
                </h2>
                <h2 className="text-4xl font-semibold text-center text-secondary mb-6">Faltan:</h2>
            </div>

            {/* Right Side: Video or Image */}
            <div className="max-w-sm gap-3 my-2 md:max-w-xl md:gap-5 md:my-4">
                <div className="md:scale-100 scale-90">
                    <CountdownToChristmas />
                </div>
            </div>
        </div>
    );
};

export default BannerContador;