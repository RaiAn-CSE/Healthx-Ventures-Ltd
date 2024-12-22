import Image from 'next/image';
import React from 'react';
import logo from "../../public/assets/logo.svg"
import DepartmentCards from './DepartmentCards';

const OurServices = () => {
    return (
        <div className='bg-gradient-to-b from-[#f6fbff] via-[#e2e2e2] to-[#e2e2e2]'>
            <div className='flex justify-center items-center space-x-3 pt-36'>
                <Image
                    src={logo}
                    alt='logo'
                    className='w-7 h-7'
                />
                <p className='font-semibold text-primary'>OUR SERVICES</p>
            </div>
            <p className='text-5xl mt-10 text-center font-semibold leading-normal'>Our Mediax specialties <br />
                service</p>

            <DepartmentCards />
        </div>
    );
};

export default OurServices;