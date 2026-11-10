'use client'

import RazorpayButton from '@/components/RazorpayButton';
import Link from 'next/link';
import React from 'react';

const DataAnalyticsCourseDetails = () => {
    return (
        <div className="md:p-24 p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                    {/* Course Description */}
                    <div>
                        <h2 className="text-xl font-semibold">Course Description</h2>
                        <p>
                            The Data Analytics course is a comprehensive, hands-on program designed to transform beginners into skilled data professionals. This course covers essential tools and techniques used in the data lifecycle—data collection, cleaning, analysis, visualization, and reporting.
                        </p>
                        <br />
                        <p>
                            You will learn to work with tools like Excel, SQL, Python (with libraries like pandas, NumPy, Matplotlib, and Seaborn), Power BI, and Tableau. With real-world case studies and live projects, you’ll gain practical experience to analyze complex data, extract meaningful insights, and support data-driven decision-making.
                        </p>
                    </div>

                    {/* Who Can Apply */}
                    <div>
                        <h2 className="text-xl font-semibold">Who can Apply?</h2>
                        <p>This course is ideal for:</p>
                        <ul className="list-disc pl-10">
                            <li>Students and graduates from any stream (Commerce, Science, Engineering, Arts, etc.)</li>
                            <li>Working professionals looking to transition into data roles</li>
                            <li>Business analysts and managers seeking to upskill</li>
                            <li>Entrepreneurs who want to use data to grow their businesses</li>
                            <li>Anyone with a strong interest in technology and problem-solving</li>
                            <li>Anyone curious about how data shapes modern business strategies</li>
                        </ul>
                        <p className="mt-2">
                            <strong>Prerequisites:</strong> No prior coding experience required. Basic computer literacy and analytical thinking are helpful.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div>
                        <h2 className="text-xl font-semibold">Key Benefits</h2>
                        <ul className="list-disc pl-10">
                            <li><span className='font-semibold'>Beginner-Friendly to Advanced Curriculum</span> structured for all backgrounds</li>
                            <li><span className='font-semibold'>Real Industry Projects</span> in sectors like sales, marketing, HR, and operations</li>
                            <li><span className='font-semibold'>Master In-Demand Tools</span> like Excel, SQL, Python, Power BI, and Tableau</li>
                            <li><span className='font-semibold'>Data Cleaning & Visualization Mastery</span> for real-world applications</li>
                            <li><span className='font-semibold'>Resume-Building Support</span> and <span className='font-semibold'>Job Interview Preparation</span></li>
                            <li><span className='font-semibold'>Government Approved Certificate</span> of Completion</li>
                        </ul>
                    </div>

                    {/* Complementary Inclusions */}
                    <div>
                        <h2 className="text-xl font-semibold">Complementary Inclusions</h2>
                        <ul className="list-disc pl-10">
                            <li><span className='font-semibold'>Free Access to Python Programming Course</span> for those new to coding</li>
                            <li><span className='font-semibold'>Career Guidance Sessions</span> with industry experts</li>
                            <li><span className='font-semibold'>Access to AIML Community Forum</span> for peer learning and networking</li>
                            <li><span className='font-semibold'>Soft Skills and Communication Workshops</span> to help you present your AI work effectively</li>
                            <li><span className='font-semibold'>Project Review & Feedback</span> from experienced mentors</li>
                            <li>Resume & LinkedIn Profile Optimization Sessions</li>
                            <li><span className='font-semibold'>Internship/Placement Assistance</span> (subject to eligibility and performance)</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - Card */}
                <div className="sticky top-5">
                    <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-4">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Data Analytics Course</h3>
                        <hr className="border-gray-300" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">🕒 Duration:</span>
                            <span>6 Months</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">💰 Price:</span>
                            <span>₹80,000</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">🗣 Medium:</span>
                            <span>English + Hindi</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">💻 Mode:</span>
                            <span>Offline</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">📜 Certificate:</span>
                            <span>Govt. Approved</span>
                        </div>
                        <hr className="border-gray-300" />

                        <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_TyTCVNq8WijDYf" async> </script> </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalyticsCourseDetails;
