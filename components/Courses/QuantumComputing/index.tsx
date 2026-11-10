'use client'

import React from 'react'
import Link from 'next/link'

const QuantumComputingCourseDetails = () => {
    return (
        <div className="p-5 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                    {/* Course Description */}
                    <div>
                        <h2 className="text-xl font-semibold">Course Description</h2>
                        <p>
                            Step into the future of computing with our Quantum Computing & Quantum Machine Learning (QML) course — a cutting-edge program designed to equip learners with the principles of quantum mechanics and its application in solving computational problems exponentially faster than classical computers.
                        </p>
                        <br />
                        <p>
                            The course begins with foundational topics like qubits, superposition, entanglement, and quantum gates, then moves into quantum algorithms (like Grover and Shor), quantum circuits, and quantum programming with platforms like Qiskit (IBM), PennyLane, and Cirq (Google).
                        </p>
                        <br />
                        <p>
                            You will also explore Quantum Machine Learning, where quantum computing is applied to accelerate data processing and model training, covering techniques like quantum-enhanced classification, clustering, and variational circuits.
                        </p>
                    </div>

                    {/* Who Can Apply */}
                    <div>
                        <h2 className="text-xl font-semibold">Who Can Apply?</h2>
                        <p>This course is ideal for:</p>
                        <ul className="list-disc pl-10">
                            <li>Computer Science, Physics, and Mathematics students and researchers</li>
                            <li>Working professionals looking to transition into Quantum roles</li>
                            <li>AI/ML practitioners aiming to enter the quantum space</li>
                            <li>Software engineers and developers interested in frontier technologies</li>
                            <li>Academicians and PhD aspirants in quantum or computational fields</li>
                            <li>Enthusiasts passionate about quantum technology and future computing models</li>
                        </ul>
                        <p className="mt-2">
                            <strong>Prerequisites:</strong> Basic knowledge of linear algebra, probability, and programming (preferably Python). Prior exposure to classical ML is a plus but not mandatory.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div>
                        <h2 className="text-xl font-semibold">Key Benefits</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Comprehensive Curriculum</span> covering Quantum Theory, Algorithms, and Programming</li>
                            <li><span className="font-semibold">Hands-on Experience</span> using Qiskit, Cirq, and PennyLane on real quantum simulators</li>
                            <li><span className="font-semibold">Practical QML Modules</span> including hybrid models and variational quantum circuits</li>
                            <li><span className="font-semibold">Build Quantum Circuits</span> and execute them on IBM Quantum Computers</li>
                            <li><span className="font-semibold">Research and Career Orientation</span> in Quantum Tech & Quantum AI</li>
                            <li><span className="font-semibold">Government Approved Certificate</span> of Completion</li>
                            <li><span className="font-semibold">Stay Future-Ready</span> with skills in one of the world’s most disruptive technologies</li>
                        </ul>
                    </div>

                    {/* Complementary Inclusions */}
                    <div>
                        <h2 className="text-xl font-semibold">Complementary Inclusions</h2>
                        <ul className="list-disc pl-10">
                            <li><span className="font-semibold">Free Access to Python Programming Course</span> for those new to coding</li>
                            <li><span className="font-semibold">Access to Quantum Cloud Platforms (IBM/Qiskit)</span></li>
                            <li><span className="font-semibold">Access to Quantum Community Forum</span> for peer learning and networking</li>
                            <li><span className="font-semibold">Soft Skills and Communication Workshops</span> to help you present your AI work effectively</li>
                            <li><span className="font-semibold">Quantum Computing Cheat Sheets & Algorithm Flowcharts</span> from experienced mentors</li>
                            <li>Live Webinars with Quantum Experts and Researchers</li>
                            <li><span className="font-semibold">Career Guidance for Research, Startups, and Quantum Jobs</span></li>
                            <li>Internship & Research Project Opportunities (based on merit)</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - Sticky Summary Card */}
                <div className="sticky top-5">
                    <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-4">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Quantum Computing & QML</h3>
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
                            <span>Online (Live + Labs)</span>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium">📜 Certificate:</span>
                            <span>Govt. Approved</span>
                        </div>
                        <hr className="border-gray-300" />

                        <Link href="/checkout?course=quantum">
                            <button className="w-full mt-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-xl transition">
                                🚀 Enroll Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuantumComputingCourseDetails
