import React from 'react';

const Appointment = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side - Doctor Image */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/16c7/6221/8f70da3d3000043993c5b5e608607f18?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nLxdD6UnuX71m2hQDKLsFnvAxBdEDhhz0VZI0iMwRQxrg42GvJrCzzHytwyc6UfgE8tSFcSU0TMEB2zJTN~mnAUrNDwaLGPErrDJ7FtMzbN2rp27rcc6QcpU~t60iGUSImnGu6FXV0NUylUHWHoFaOeH38fFr9hzRSKMvnQUZphAmtpDSmRSiL41Efrd9oswjmyqADZwhq1d0eScbSB285SF~g47W49gLWA81Ph4SsGHp9YJXdT-4Zm-wkccLjURLUPOQqgPqeQGKjDIoVY3UZvqtqzDj9XCCNp0g1PZ1~YTcIHb5KqZ9tD3VrEW9KgWfKKfG0e3F3pNeb3v82Xzmg__" // Replace with the path to your image
                            alt="Doctor"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
                    <div className="mb-4 text-center">
                        <h5 className="text-blue-500 font-medium">CONTACT US</h5>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                            Get A Quote Today
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                            Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text
                            Ever Since The 1500s.
                        </p>
                    </div>

                    <form>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="date"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
                            >
                                APPOINTMENT NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;