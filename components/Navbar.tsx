import Image from "next/image";
import Link from "next/link";
import Logo from "../public/PHAROS.png"
const Navbar = () => {
    return ( 
     <nav className="sticky bg-[#1d4ed8]  shadow-lg">
     <div className="container mx-auto flex justify-between items-center p-4 ">
     
            <a href="https://x.com/pharos_network" className="font-bold text-white"><Image src={Logo} alt="name" width={120} height={120}/></a>
                <a href="https://x.com/haakimii__" className="text-sm font-semibold text-black py-2 px-5 rounded-xl bg-white shadow-2xl">Lets Connect</a>
         </div>
        
    </nav>
    // <div>welcome my man chi</div>
    );
}
 
export default Navbar;