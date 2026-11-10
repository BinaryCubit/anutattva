'use client'

import React from 'react'
import Link from 'next/link'
import RazorpayButton from '@/components/RazorpayButton'

const FullStackCourseDetails = () => {
    return (
        <div className="p-5 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                    {/* Course Description */}
                    <div>
                        <h2 className="text-xl font-semibold">Course Description</h2>
                        <p>
                            The Full Stack Web Development course is a job-oriented training program designed to make you proficient in building complete web applications from scratch — covering both front-end and back-end development.
                        </p>
                        <br />
                        <p>
                            You’ll begin with core web technologies like HTML, CSS, JavaScript, and progress into your selected stack:
                        </p>
                        <ul className="list-disc pl-10">
                            <li><span className="text-lg font-semibold">Java Full Stack –</span> Spring Boot, JSP, Hibernate, MySQL</li>
                            <li><span className="text-lg font-semibold">MERN Stack –</span> MongoDB, Express.js, React.js, Node.js</li>
                            <li><span className="text-lg font-semibold">MEAN Stack –</span> MongoDB, Express.js, Angular, Node.js</li>
                            <li><span className="text-lg font-semibold">Laravel Stack –</span> Laravel PHP Framework, Blade templating, MySQL</li>
                        </ul>
                        <p className="mt-2">
                            This course is project-based and outcome-driven, ensuring you gain real-world coding skills, software development practices, and version control via Git/GitHub.
                        </p>
                    </div>

                    {/* Who Can Apply */}
                    <div>
                        <h2 className="text-xl font-semibold">Who can Apply?</h2>
                        <p>This course is ideal for:</p>
                        <ul className="list-disc pl-10">
                            <li>Students and graduates from any stream (Commerce, Science, Engineering, Arts, etc.)</li>
                            <li>Working professionals looking to transition into Software roles</li>
                            <li>Beginners with a passion for web development</li>
                            <li>Professionals aiming to transition into full stack roles</li>
                            <li>Freelancers and entrepreneurs wanting to build complete web applications</li>
                            <li>Anyone with a strong interest in technology and problem-solving</li>
                            <li>Anyone looking to start a career in software development</li>
                        </ul>
                        <p className="mt-2">
                            <strong>Prerequisites:</strong> Basic computer knowledge is required. No prior coding experience needed – fundamentals are covered.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div>
                        <h2 className="text-xl font-semibold">Key Benefits</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Specialize in a Stack of Your Choice</span> (Java / MERN / MEAN / Laravel)</li>
                            <li><span className="font-semibold">Master Frontend & Backend Development</span> with real-world projects</li>
                            <li><span className="font-semibold">Industry-Aligned Curriculum</span> with updated frameworks and tools</li>
                            <li><span className="font-semibold">Live Project Portfolio</span> including e-commerce, dashboards, blogs, CRMs</li>
                            <li><span className="font-semibold">Version Control & Deployment Skills</span> and using Git, GitHub, and cloud platforms</li>
                            <li><span className="font-semibold">Government Approved Certificate</span> of Completion</li>
                        </ul>
                    </div>

                    {/* Complementary Inclusions */}
                    <div>
                        <h2 className="text-xl font-semibold">Complementary Inclusions</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Free Git & GitHub Version Control Module</span> for those new to coding</li>
                            <li><span className="font-semibold">Career Guidance Sessions</span> with industry experts</li>
                            <li><span className="font-semibold">Access to Web Developer Community Forum</span> for peer learning and networking</li>
                            <li><span className="font-semibold">Soft Skills and Communication Workshops</span> to help you present your work effectively</li>
                            <li><span className="font-semibold">Project Review & Feedback</span> from experienced mentors</li>
                            <li>Resume & LinkedIn Profile Optimization Sessions</li>
                            <li>Access to Developer Tools & Cheat Sheets</li>
                            <li><span className="font-semibold">Internship/Placement Assistance</span> (subject to eligibility and performance)</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - Sticky Summary Card */}
                <div className="sticky top-5">
                    <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-4">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Full Stack Developer</h3>
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

                       <form action="">
                        <RazorpayButton/>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullStackCourseDetails
