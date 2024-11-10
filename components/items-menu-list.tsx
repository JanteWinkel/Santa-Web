import { Menu } from "lucide-react";
import { PopoverContent, Popover, PopoverTrigger } from "./ui/popover"
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu className="text-primary" />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="#contador" className="block text-primary">Contador Navideño</Link>
                <Link href="#calendario" className="block text-primary">Calendario</Link>
                <Link href="#eventos" className="block text-primary"> Tipos de eventos</Link>
                <Link href="#contacto" className="block text-primary">Contacto</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;