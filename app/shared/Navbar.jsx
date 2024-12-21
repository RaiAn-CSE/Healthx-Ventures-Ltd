import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg px-20">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" passHref>
                        <div className="cursor-pointer text-blue-700 font-bold text-2xl">
                            <span className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                                <Image
                                    src={logo}
                                    width={32}
                                    height={32}
                                    alt="Health Logo"
                                    className="rounded-full mr-2"
                                />
                                Health
                            </span>
                        </div>
                    </Link>
                </div>


                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6 text-gray-700">
                    <Link href="/findDoctors" className="hover:text-blue-500">
                        Find Doctors
                    </Link>
                    <Link href="/hospitals" className="hover:text-blue-500">
                        Hospitals
                    </Link>
                    <Link href="/about" className="hover:text-blue-500">
                        About Us
                    </Link>
                    <Link href="/services" className="hover:text-blue-500">
                        Services
                    </Link>
                    <Link href="/contact" className="hover:text-blue-500">
                        Contact
                    </Link>
                </div>

                {/* Icons & Button */}
                <div className="flex items-center space-x-4">
                    {/* Search Icon */}
                    <button className="p-2 rounded-full hover:bg-gray-100">
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
                    <div className="relative">
                        <button className="p-2 rounded-full hover:bg-gray-100">
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
                    <Link
                        href="/appointment"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl"
                    >
                        Appointment Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;