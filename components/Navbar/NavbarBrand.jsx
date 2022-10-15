import Link from "next/link";

export default function NavbarBrand(){
    return (
        <Link href="/">
            <a className="flex items-center">
            <span className="mr-3 self-center text-xl font-semibold whitespace-nowrap">
                Rumah Ternak
            </span>
            <img
                src="/logo/icon.png"
                className="h-6 sm:h-9"
                alt="Rumah Ternak Logo"
            />
            </a>
        </Link>
    )
}