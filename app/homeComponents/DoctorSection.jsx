import React from 'react';

const DoctorSection = () => {
    const doctors = [
        {
            name: 'Dr. Dredor Smith',
            specialty: 'Medicine Specialist',
            rating: 3.9,
            reviews: 252,
            patients: 4895,
            hospital: 'Inferrmedica Hospital, NYC',
        },
        {
            name: 'Dr. Amrita Sen Gupta',
            specialty: 'General Surgeon',
            rating: 4.8,
            reviews: 599,
            patients: 1698,
            hospital: 'Mediplus Hospital, NYC',
        },
        {
            name: 'Dr. Christinne Jones',
            specialty: 'Pediatrician',
            rating: 4.8,
            reviews: 321,
            patients: 9375,
            hospital: 'Advocate Hospital, NYC',
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Special Doctors</h2>
                <p className="text-center text-gray-600 mb-16">
                    Our team of specialists is at the forefront of medical innovation. Each
                    specialist brings a unique blend of expertise, empathy, and experience to
                    ensure that your health is in the best hands.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor) => (
                        <div key={doctor.name} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                            <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                            <div className="flex items-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0a1.75 1.75 0 001.003.44c.497.554.697 1.263.538 1.907-.159.644-.48 1.095-1.003 1.44-1.003.523-2.37 1.234-2.616 1.845a.75.75 0 01-1.024-.018c-.355-.61-.832-1.28-1.102-1.869a1.75 1.75 0 00-1.003-.44c-.3-.921-1.603-.921-1.902 0a1.75 1.75 0 00-1.003.44c-.497.554-.697 1.263-.538 1.907.159.644.48 1.095 1.003 1.44 1.003.523 2.37 1.234 2.616 1.845a.75.75 0 01-1.024-.018c-.355-.61-.832-1.28-1.102-1.869a1.75 1.75 0 00-1.003-.44c-.3-.921-1.603-.921-1.902 0A1.75 1.75 0 002.09 10.25c.08.444.27.845.538 1.2..." />
                                </svg>
                                <span className="ml-2 text-sm text-gray-500">
                                    {doctor.rating} ({doctor.reviews} reviews)
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">
                                {doctor.patients} Patients
                            </p>
                            <p className="text-sm text-gray-500">{doctor.hospital}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;