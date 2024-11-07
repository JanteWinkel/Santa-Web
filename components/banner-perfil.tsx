import Link from "next/link";
import { buttonVariants } from "./ui/button";


const BannerPerfil = () => {
    return (
        <>
            <div className="flex max-w-6xl px-4 pt-16  mx-auto sm:px-6 lg:px-8">
                <div>
                    
                </div>
                <div className="mt-8 ">
                    <p className="my-2 text-lg">¡Santa Claus llega a Margarita para hacer tus navidades inolvidables! 🎅🏻</p>
                    <h4 className="mt-2 text-5xl text-primary font-extrabold uppercase ">Santa Claus Querido</h4>
                    <p className="my-2 text-lg">¿Quieres sorprender a tus seres queridos con una visita especial de Santa? ¡Contáctanos y hagamos de esta Navidad algo mágico! ✨🎄</p>
                    <div className='items-center text-primary'>
                    <Link href="#contacto" className={buttonVariants({ variant: "outline"})}>Más información</Link>
                    </div>
                </div>
            </div>
        </>);
}

export default BannerPerfil;