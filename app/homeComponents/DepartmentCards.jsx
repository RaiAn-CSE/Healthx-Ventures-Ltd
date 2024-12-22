import React from "react";
import icon1 from "../../public/assets/servicesIcon1.svg"
import icon2 from "../../public/assets/servicesIcon2.svg"
import icon3 from "../../public/assets/servicesIcon3.svg"
import icon4 from "../../public/assets/servicesIcon4.svg"
import icon5 from "../../public/assets/servicesIcon5.svg"
import icon6 from "../../public/assets/servicesIcon6.svg"
import icon7 from "../../public/assets/servicesIcon7.svg"
import icon8 from "../../public/assets/servicesIcon8.svg"
import Image from "next/image";
import Button from "../shared/Button";

const departments = [
    {
        icon: icon1,
        title: "Internal Medicine",
        doctors: "30+ Doctors",
    },
    {
        icon: icon2,
        title: "Dental Care",
        doctors: "30+ Doctors",
    },
    {
        icon: icon3,
        title: "Urology Care",
        doctors: "30+ Doctors",
    },
    {
        icon: icon4,
        title: "Neurology Care",
        doctors: "30+ Doctors",
    },
    {
        icon: icon5,
        title: "Gynecologists",
        doctors: "30+ Doctors",
    },
    {
        icon: icon6,
        title: "Ophthalmology",
        doctors: "30+ Doctors",
    },
    {
        icon: icon7,
        title: "Orthopedics",
        doctors: "30+ Doctors",
    },
    {
        icon: icon8,
        title: "Cardiology",
        doctors: "30+ Doctors",
    },
];

const DepartmentCards = () => {
    return (
        <div className="py-10 px-28">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg nm_Container p-6 text-center transform transition duration-300 hover:scale-105"
                    >
                        <div className="flex justify-center items-center mb-4">
                            <Image
                                src={department?.icon}
                                alt={department?.title}
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {department.title}
                        </h3>
                        <p className="text-gray-600">{department.doctors}</p>
                        <Button
                            text="READ MORE"
                            className={"px-4 py-[10px] text-[12px] mt-4"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentCards;
