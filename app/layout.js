import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./shared/Footer";
// import NavbarComponent from "./shared/Navbar";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.svg"
import Button from "./shared/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* Navbar */}
        <nav className="bg-white shadow-2xl px-28 py-4 z-50">
          <div className="container mx-auto flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" passHref>
                <div className="cursor-pointer text-primary font-bold text-2xl">
                  <span className="flex items-center">
                    <Image
                      src={logo}
                      alt="Health Logo"
                      className="mr-2"
                    />
                    Health
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 text-gray-700">
              <Link href="/findDoctors" className="hover:text-primary">
                Find Doctors
              </Link>
              <Link href="/hospitals" className="hover:text-primary">
                Hospitals
              </Link>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>

            <div className="flex items-center">
              {/* Search Icon */}
              <button className="p-2 rounded-full hover:bg-gray-100 border border-primary">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Cart Icon */}
              <div className="relative mx-2">
                <button className="p-2 rounded-full hover:bg-gray-100 border border-primary">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m-2-8l1.4-2m8.4 14a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </div>

              {/* Appointment Button */}
              <Button
                text="Appointment Now"
                // onClick={handleClick}
                className="ml-10" />
            </div>
          </div>
        </nav>

        {/* Body  */}
        {children}

        {/* Footer  */}
        <Footer />
      </body>
    </html>
  );
}
