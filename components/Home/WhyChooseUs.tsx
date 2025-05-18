import React from 'react';
import { Award, Users, Lightbulb, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-6 w-6 text-orange-500" />,
    title: 'Industry-Endorsed Curriculum',
    description: 'Our programs are designed with input from experts to ensure real-world relevance and practical impact.',
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    title: 'Experienced Mentors',
    description: 'Learn from passionate trainers with years of hands-on experience in top companies and research fields.',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
    title: 'Project-Based Learning',
    description: 'Build real-time projects that strengthen your concepts and enhance your professional portfolio.',
  },
  {
    icon: <Globe2 className="h-6 w-6 text-orange-500" />,
    title: 'Career Guidance & Placement',
    description: 'We provide personal mentorship, mock interviews, and placement support to kickstart your tech career.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-orange-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          At Anutattva Foundation, we believe in empowering individuals through transformative education. Here’s what sets us apart:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-orange-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
