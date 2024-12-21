import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Contact Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                        <span className="text-2xl font-bold">Health</span>
                    </div>
                    <p className="text-sm">
                        Sahibabad, Ghaziabad, Uttar Pradesh <br />
                        201005
                    </p>
                    <p className="text-sm mt-2">+1-887*****78787</p>
                    <p className="text-sm">info@demohelp.com</p>
                    {/* Social Media Links */}
                    <div className="flex mt-4 space-x-4">
                        <a
                            href="#"
                            className="text-white hover:text-cyan-500"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-cyan-500"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-cyan-500"
                            aria-label="YouTube"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-cyan-500"
                            aria-label="Pinterest"
                        >
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/about-us" className="hover:text-cyan-500">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:text-cyan-500">
                                Our Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-cyan-500">
                                Our Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/appointment" className="hover:text-cyan-500">
                                Appointment
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:text-cyan-500">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Department */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Department</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/orthology" className="hover:text-cyan-500">
                                Orthology
                            </Link>
                        </li>
                        <li>
                            <Link href="/neurology" className="hover:text-cyan-500">
                                Neurology
                            </Link>
                        </li>
                        <li>
                            <Link href="/dental-care" className="hover:text-cyan-500">
                                Dental Care
                            </Link>
                        </li>
                        <li>
                            <Link href="/ophthalmology" className="hover:text-cyan-500">
                                Ophthalmology
                            </Link>
                        </li>
                        <li>
                            <Link href="/cardiology" className="hover:text-cyan-500">
                                Cardiology
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/about-us" className="hover:text-cyan-500">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-cyan-500">
                                Our Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-cyan-500">
                                Our Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/appointment" className="hover:text-cyan-500">
                                Appointment
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:text-cyan-500">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm border-t border-blue-800 pt-4">
                Copyright © 2024 Health.com. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;