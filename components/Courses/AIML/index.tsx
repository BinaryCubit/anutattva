'use client'

import React from 'react'

import RazorpayButton from '@/components/RazorpayButton'

const AimlCourse = () => {
    return (
        <div className="md:p-24 p-5">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">

                {/* LEFT COLUMN - Description Sections */}
                <div className="space-y-6">
                    <div>
                        <h2 className='text-xl font-semibold'>Course Description</h2>
                        <p>
                            The Artificial Intelligence & Machine Learning (AIML) course is designed to equip learners with the foundational and advanced concepts of AI and ML, covering both theoretical knowledge and hands-on skills. This course delves into supervised and unsupervised learning, deep learning, natural language processing (NLP), computer vision, and real-world model deployment techniques.
                        </p>
                        <br />
                        <p>
                            Learners will gain expertise in Python, TensorFlow, Scikit-learn, and other essential tools used in AI development. Real-life case studies, projects, and coding assignments are integrated to ensure practical understanding and industry relevance.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold'>Who can Apply?</h2>
                        <p>This course is ideal for:</p>
                        <ul className='list-disc pl-6 mt-2'>
                            <li>Students (Undergraduate/Postgraduate) from Computer Science, IT, or related fields</li>
                            <li>Software Developers looking to shift into the AI/ML domain</li>
                            <li>Data Analysts and Engineers wanting to deepen their ML knowledge</li>
                            <li>Working professionals in IT or analytics seeking upskilling opportunities</li>
                            <li>Entrepreneurs and Tech Enthusiasts curious about building AI-driven solutions</li>
                            <li>Anyone with a strong interest in technology and problem-solving</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold'>Key Benefits</h2>
                        <ul className='list-disc pl-6 mt-2'>
                            <li><strong>Industry-Relevant Curriculum:</strong> aligned with the latest trends in AI and ML</li>
                            <li><strong>Hands-on Projects:</strong> in domains like healthcare, finance, e-commerce, and more</li>
                            <li><strong>Real-world Tools & Libraries:</strong> TensorFlow, Keras, Pandas, Scikit-learn, etc.</li>
                            <li><strong>Capstone Project:</strong> to showcase your expertise in AI/ML</li>
                            <li><strong>Resume-Building Support</strong> and <strong>Job Interview Preparation</strong></li>
                            <li><strong>Government Approved Certificate</strong> of Completion</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold'>Complementary Inclusions</h2>
                        <ul className='list-disc pl-6 mt-2'>
                            <li><strong>Free Access to Python Programming Course</strong> for those new to coding</li>
                            <li><strong>Career Guidance Sessions</strong> with industry experts</li>
                            <li><strong>Access to AIML Community Forum</strong> for peer learning and networking</li>
                            <li><strong>Soft Skills and Communication Workshops</strong> to help you present your AI work effectively</li>
                            <li><strong>Project Review & Feedback</strong> from experienced mentors</li>
                            <li><strong>Internship/Placement Assistance</strong> (subject to eligibility and performance)</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - Course Card */}
                <div className="sticky top-5">
  <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-4">
    <h3 className="text-2xl font-bold text-center text-gray-800">AIML Course Details</h3>

    {/* Divider */}
    <hr className="border-gray-300" />

    {/* Duration */}
    <div className="flex justify-between text-gray-700">
      <span className="font-medium">🕒 Duration:</span>
      <span>6 Months</span>
    </div>

    {/* Divider */}
    <hr className="border-gray-200" />

    {/* Price */}
    <div className="flex justify-between text-gray-700">
      <span className="font-medium">💰 Price:</span>
      <span>₹80,000</span>
    </div>

    {/* Divider */}
    <hr className="border-gray-200" />

    {/* Medium */}
    <div className="flex justify-between text-gray-700">
      <span className="font-medium">🗣 Medium:</span>
      <span>English + Hindi</span>
    </div>

    {/* Divider */}
    <hr className="border-gray-200" />

    {/* Mode */}
    <div className="flex justify-between text-gray-700">
      <span className="font-medium">💻 Mode:</span>
      <span>Online (Live + Recorded)</span>
    </div>

    {/* Divider */}
    <hr className="border-gray-200" />

    {/* Certificate */}
    <div className="flex justify-between text-gray-700">
      <span className="font-medium">📜 Certificate:</span>
      <span>Govt. Approved</span>
    </div>

    {/* Divider */}
    <hr className="border-gray-300" />

    {/* CTA Button */}
   {/* Razorpay Button */}

   <form action="">
   <RazorpayButton/>
   </form>
  </div>
</div>

            </div>
        </div>
    )
}

export default AimlCourse;
