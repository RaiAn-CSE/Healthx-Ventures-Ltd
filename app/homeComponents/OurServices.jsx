import Image from 'next/image';
import React from 'react';
import logo from "../../public/assets/logo.svg"

const OurServices = () => {
    return (
        <>
            <div className='flex justify-center items-center space-x-3 mt-36'>
                <Image
                    src={logo}
                    alt='logo'
                    className='w-7 h-7'
                />
                <p className='font-semibold text-primary'>OUR SERVICES</p>
            </div>
            <p className='text-5xl mt-10 text-center font-semibold leading-normal'>Our Mediax specialties <br />
                service</p>
        </>
    );
};

export default OurServices;