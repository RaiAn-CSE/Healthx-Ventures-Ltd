import React from 'react';
import Button from '../shared/Button';
import navbarImage from "../../public/assets/navbarImage.svg"
import logo from "../../public/assets/logo.svg"
import headerLine from "../../public/assets/headerLine.svg"
import Image from 'next/image';


const Header = () => {
    return (
        <header className="relative bg-gradient-to-r from-[#f5fcff] to-[#f7faff]">
            <div className='flex flex-col md:flex-row items-center justify-between px-28 pt-14 pb-7'>
                <div className="text-center md:text-left space-y-5 mb-20">
                    <div className="text-secondary font-medium flex items-center space-x-4">
                        <Image
                            src={logo}
                            alt='header doctor picture'
                            className='w-8 h-8'
                        />
                        <p>24/7 EMERGENCY SERVICE</p>
                    </div>

                    <div className='relative w-fit'>
                        <h1 className="text-6xl font-bold text-[#04182b]">
                            Caring for <span className="text-primary">Health</span> <br />
                        </h1>
                        <Image
                            src={headerLine}
                            alt='Header line'
                            className='absolute -right-10'
                        />
                    </div>
                    <p className='text-6xl font-bold text-[#04182b]'>Caring for you</p>

                    <p className="text-gray-600 leading-7">
                        A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care, community health.
                    </p>

                    <div className="mt-5 flex justify-center md:justify-start gap-4">
                        <button className="inline-block px-6 py-[13px] rounded-full bg-gradient-to-b from-[#21b7fc] from-10% via-[#29b3f6] via-30% to-[#c2ebfe] to-90% text-white font-bold shadow-md hover:shadow-lg transition-shadow duration-200">DISCOVER MORE</button>
                        <Button
                            text="SEE ALL SERVICES"
                        />
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <Image
                        src={navbarImage}
                        alt="Doctors"
                        className="max-w-sm md:max-w-md mx-auto"
                    />
                </div>
            </div>

            {/* Absolute div*/}
            <div className="absolute -bottom-[13%] w-full mx-auto grid justify-center">
                <div className='max-w-7xl grid grid-flow-col justify-center gap-3 bg-white shadow-lg rounded-lg px-10 py-10'>
                    <input
                        type="text"
                        placeholder="Ex. Doctor, Hospital"
                        className="input input-bordered w-full max-w-xs bg-[#fafbfe] border border-gray-200 rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Ex. Surgeon, Cardiologist"
                        className="input input-bordered w-full max-w-xs bg-[#fafbfe] border border-gray-200 rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Set your location"
                        className="input input-bordered w-full max-w-xs bg-[#fafbfe] border border-gray-200 rounded-lg"
                    />
                    <Button
                        text="Search"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;