import Breadcrump from "@/components/Common/Breadcrumb";
import CourseCard from "@/components/Courses/CourseCard";
import React from "react";


const courses = [
    {
        title: "Artificial Intelligence & Machine Learning (AIML)",
        description:
            "Master AI concepts, algorithms, and machine learning techniques using Python, TensorFlow, and Scikit-learn.",
        duration: "10-12 Months",
        level: "Intermediate to Advanced",
        imageUrl: "/Images/courses/aiml.jpeg",
        link: "/courses/aiml",
    },
    {
        title: "Data Science",
        description:
            "Comprehensive training in statistics, data analysis, machine learning, and visualization tools like Power BI & Tableau.",
        duration: "7-8 Months",
        level: "Beginner to Advanced",
        imageUrl: "/Images/courses/data-science.jpeg",
        link: "/courses/data-science",
    },
    {
        title: "Data Analytics",
        description:
            "Learn data cleaning, analysis, and visualization using Excel, SQL, Python, Power BI, and Tableau.",
        duration: "6 Months",
        level: "Beginner",
        imageUrl: "/Images/courses/data-analytics.jpeg",
        link: "/courses/data-analytics",
    },
    {
        title: "Full Stack Web Development",
        description:
            "Become a full stack developer with a choice of Java, MERN, MEAN, or Laravel stack with live project experience.",
        duration: "6 Months",
        level: "Beginner to Intermediate",
        imageUrl: "/Images/courses/full-stack.jpg",
        link: "/courses/full-stack-web-development",
    },
    {
        title: "Quantum Computing & Quantum Machine Learning",
        description:
            "Dive into the future of tech with Qiskit, PennyLane, and real quantum algorithms for AI and optimization.",
        duration: "8-9 Months",
        level: "Advanced",
        imageUrl: "/Images/courses/quantum-computing.jpeg",
        link: "/courses/quantum-computing",
    },
];

const links = [
    {
        title: "Home",
        link: "/"
    },

]
const CourseList: React.FC = () => {
    return (
        <div>
            <Breadcrump title="Courses" links={links} page="courses" />
            <div className="max-w-7xl mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Our Courses at Anutattva Foundation
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;
