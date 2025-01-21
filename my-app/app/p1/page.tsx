import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center text-red-500">Page 1</h1>
            <Image src="/img1.jpg" width={300} height={300} alt="img1" className="mx-auto items-center"></Image>
    <Link href="/p1" className="text-center">Goto Pages1</Link><br />
    <Link href="/p2" className="text-center">Goto Pages2</Link><br />
    <Link href="/p3" className="text-center">Goto Pages3</Link><br />
        </div>
    );
}