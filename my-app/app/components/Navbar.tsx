import Link from "next/link";
import Image from "next/image";
const Menu = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Page1", href: "/p1" },
    { name: "Page2", href: "/p2" },
    { name: "Page3", href: "/p3" },
]
export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-gray-400">
            <div>
                <Image src={"/nike.jpg"} width={100} height={100} alt={""}></Image>
            </div>

            <div >
            <ul className="flex gap-x-6">
                <li >

                    <Link href="#">Goto Home</Link>
                </li>
                <li>
                    <Link href="/p1">Goto Page1</Link>
                </li>
                <li>
                    <Link href="/p2">Goto Page2</Link></li>
                <li>
                    <Link href="/p3">Goto Page3</Link>

                </li>
            </ul>
            </div>

        </div>
    );
}