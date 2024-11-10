import Link from "next/link";
import { buttonVariants } from "./ui/button";


const BannerPerfil = () => {
    return (
        <>
            <div className="flex max-w-6xl px-4 pt-16 mt-4  mx-auto sm:px-6 lg:px-8">
                <div>

                </div>
                <div className="mt-8 ">
                    <p className="my-2 text-lg">La cuenta regresiva ha comenzado, ¡pero la magia de la Navidad perdura todo el año!</p>
                    <div className="hidden sm:block">
                        <h4 className="mt-2 text-5xl text-primary font-extrabold uppercase">¡Santa Claus ha llegado a Margarita! 🎅🏼</h4>
                    </div>

                    <div className="block sm:hidden">
                        <h4 className="mt-2 text-5xl text-primary font-extrabold uppercase">¡Santa ya está aquí!</h4>
                    </div>

                    <p className="my-2 text-lg"> ¡Contáctanos y crea recuerdos inolvidables esta Navidad! 🎄✨</p>
                    <div className='items-center text-primary'>
                        <Link href="#contacto" className={buttonVariants({ variant: "outline" })}>Más información</Link>
                    </div>
                </div>
            </div>
        </>);
}

export default BannerPerfil;