import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { DropdownMenuDemo } from "./dropdownmenu";

export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 grid grid-cols-1 md:grid-cols-12">
            <div className="container mx-auto py-4 px-6 md:col-start-2 md:col-span-10 flex items-center justify-between">
                <div className="flex items-center text-xl font-bold">
                    <Link href="/">
                        <Image 
                            src="/assets/logo.png" // Chemin vers ton logo
                            alt="Logo JurisLex"
                            width={100} // Ajuste la largeur selon tes besoins
                            height={150} // Ajuste la hauteur selon tes besoins
                        />
                    </Link>
                </div>
                <div className="flex md:hidden">
                   <DropdownMenuDemo/>
                </div>
                <Menubar className="border-0 hidden md:flex">
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/">Accueil</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/service">Nos Services</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/about">A Propos</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/contact">Contact</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}
