import React from "react";

const Button = ({ text, onClick, className, type = "button" }) => {
    return (
        <button
            // type={type}
            onClick={onClick}
            className={`inline-block px-6 py-[13px] rounded-full bg-gradient-to-b from-[#6893d8] from-10% via-[#1f5fa4] via-30% to-[#cde3f9] to-90% text-white font-bold shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
