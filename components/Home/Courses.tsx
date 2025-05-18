import React from 'react';
import { GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Master AI and ML concepts with real-world applications, tools, and hands-on projects.',
  },
  {
    title: 'Data Science',
    description: 'Learn data wrangling, visualization, and predictive analytics using Python and modern libraries.',
  },
  {
    title: 'Data Analytics',
    description: 'Turn raw data into actionable insights using tools like Excel, Power BI, SQL, and Tableau.',
  },
  {
    title: 'Quantum Computing',
    description: 'Explore the future of computing with hands-on Qiskit and quantum algorithms.',
  },
  {
    title: 'Full Stack Development',
    description: 'Become a MERN stack developer by learning MongoDB, Express, React, and Node.js.',
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Learn ethical hacking, security fundamentals, and how to safeguard digital systems.',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Our Courses</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Designed to empower students with future-ready skills, Anutattva Foundation offers a wide range of transformative courses.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-orange-50 hover:bg-orange-100 transition shadow-md rounded-xl p-6 text-left border border-orange-200"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-orange-500 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
