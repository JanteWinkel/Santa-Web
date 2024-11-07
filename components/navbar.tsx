"use client"

import { useRouter } from "next/navigation";
import { ModeToggle } from "./toggle-theme";
import ItemsMenuMobile from "./items-menu-list";
import MenuList from "./menu-list";


const Navbar = () => {
    const router = useRouter()

    return (
        <div className="fixed top-0 left-0 w-full bg-background shadow-md z-50 flex items-center justify-between p-4 cursor-pointer  ">
            <h1 className="text-3xl text-primary" onClick={() => router.push("/")}>
                
                <span className="font-bold">Santa</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>

    )
}
export default Navbar;