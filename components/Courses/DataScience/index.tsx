'use client'

import React from 'react'
import Link from 'next/link'

const DataScienceCourseDetails = () => {
    return (
        <div className="p-5 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                    {/* Course Description */}
                    <div>
                        <h2 className="text-xl font-semibold">Course Description</h2>
                        <p>
                            The Data Science course is a career-oriented program that blends statistical analysis, machine learning, and programming to help learners uncover insights from complex data. This course offers a structured path from data collection and preprocessing to advanced modeling and interpretation.
                        </p>
                        <br />
                        <p>
                            You’ll master tools like Python, pandas, NumPy, Scikit-learn, Matplotlib, SQL, and Power BI. The curriculum includes real-world projects involving predictive modeling, classification, clustering, and more, helping you gain deep practical experience in solving data-driven problems across domains.
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
                            <li>Professionals from non-tech backgrounds with a passion for data-driven decision-making</li>
                            <li>Anyone with a strong interest in technology and problem-solving</li>
                            <li>Freshers looking to build a strong data science portfolio</li>
                        </ul>
                        <p className="mt-2">
                            <strong>Prerequisites:</strong> Basic knowledge of math and logical reasoning. Programming experience is helpful but not mandatory—Python fundamentals are covered.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div>
                        <h2 className="text-xl font-semibold">Key Benefits</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Beginner-Friendly to Advanced Curriculum</span> structured for all backgrounds</li>
                            <li><span className="font-semibold">Real Industry Projects</span> in sectors like sales, marketing, HR, and operations</li>
                            <li><span className="font-semibold">Master In-Demand Tools</span> like Excel, SQL, Python, Power BI, and Tableau</li>
                            <li><span className="font-semibold">Focus on Statistics, ML, and Model Evaluation</span> for real-world applications</li>
                            <li><span className="font-semibold">Resume-Building Support</span> and <span className="font-semibold">Job Interview Preparation</span> & Career Support with mock interviews, and job referrals</li>
                            <li><span className="font-semibold">Government Approved Certificate</span> of Completion</li>
                        </ul>
                    </div>

                    {/* Complementary Inclusions */}
                    <div>
                        <h2 className="text-xl font-semibold">Complementary Inclusions</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Free Access to Python Programming Course</span> for those new to coding</li>
                            <li><span className="font-semibold">Career Guidance Sessions</span> with industry experts</li>
                            <li><span className="font-semibold">Access to Data Science Community Forum</span> for peer learning and networking</li>
                            <li><span className="font-semibold">Soft Skills and Communication Workshops</span> to help you present your AI work effectively</li>
                            <li><span className="font-semibold">Project Review & Feedback</span> from experienced mentors</li>
                            <li>Resume & LinkedIn Profile Optimization Sessions</li>
                            <li><span className="font-semibold">Internship/Placement Assistance</span> (subject to eligibility and performance)</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - Sticky Summary Card */}
                <div className="sticky top-5">
                    <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-4">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Data Science Course</h3>
                        <hr className="border-gray-300" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">🕒 Duration:</span>
                            <span>6 Months</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">💰 Price:</span>
                            <span>₹21,999</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">🗣 Medium:</span>
                            <span>English + Hindi</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">💻 Mode:</span>
                            <span>Online (Live + Recorded)</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">📜 Certificate:</span>
                            <span>Govt. Approved</span>
                        </div>
                        <hr className="border-gray-300" />

                        <Link href="/checkout?course=data-science">
                            <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">
                                🚀 Enroll Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataScienceCourseDetails
