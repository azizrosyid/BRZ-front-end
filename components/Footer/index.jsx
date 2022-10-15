import Link from 'next/link';
import NavbarBrand from '../Navbar/NavbarBrand';

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:px-6 md:py-8 border-t-2 border-gray-100 mt-10">
      <div className="sm:flex sm:items-center sm:justify-between">
        <NavbarBrand />
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center ">
        <Link href="/">
          <a href="/" className="hover:underline">Rumah Ternak © 2022</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
