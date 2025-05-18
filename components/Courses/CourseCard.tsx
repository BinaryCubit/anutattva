import React from "react";

type CourseProps = {
    title: string;
    description: string;
    duration: string;
    level: string;
    imageUrl: string;
    link: string;
};

const CourseCard: React.FC<CourseProps> = ({
    title,
    description,
    duration,
    level,
    imageUrl,
    link,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>🕒 {duration}</span>
                <span>📈 {level}</span>
            </div>
            <a
                href={link}
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
                View Details
            </a>
        </div>
    );
};

export default CourseCard;
