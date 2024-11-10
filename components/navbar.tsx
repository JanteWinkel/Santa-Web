/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { ModeToggle } from "./toggle-theme";
import ItemsMenuMobile from "./items-menu-list";
import MenuList from "./menu-list";
import { useTheme } from "next-themes"; // Importamos el hook de next-themes

const Navbar = () => {
    const router = useRouter();
    const { theme } = useTheme(); 

    return (
        <div className="fixed top-0 left-0 w-full bg-background shadow-md z-50 flex items-center justify-between p-4 cursor-pointer">
            <img
                src={theme === "dark" ? "/logos/logo-navbar-2.png" : "/logos/logo-navbar-2.png"}
                alt="Logo Querido Santa"
                className="h-16 w-auto cursor-pointer"
                onClick={() => router.push("/")}
            />
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
    );
};

export default Navbar;
