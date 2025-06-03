'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { FaPython, FaBrain, FaChartBar, FaUserGraduate } from "react-icons/fa";

import { GiArtificialIntelligence } from "react-icons/gi";
import Image from "next/image";

export default function WebinarLandingPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        FullName: "",
        Email: "",
        Mobile: "",
        City: "",
        State: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // prevent default form submission
        setLoading(true);
      
        const formDataPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataPayload.append(key, value);
        });
        formDataPayload.append("Date", new Date().toLocaleDateString());
      
        try {
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxdR6n8YB6sfVTcqYD3pxzjS2ePtWYfqx_HNwYgtqt6jT6SXPS_nHTHhz-wNLNxIFi8-g/exec",
            {
              method: "POST",
              body: formDataPayload, // ✅ no headers needed
            }
          );
      
          // Google Apps Script with `no-cors` doesn't return readable data, so we check based on assumptions
          setSubmitted(true);
        } catch (error) {
          console.error("Form submission failed", error);
          alert("Network error. Try again.");
        } finally {
          setLoading(false);
        }
      };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
            {/* Hero Section */}
            <section className="text-center py-24 px-4 relative overflow-hidden">
                <div className="animate-pulse absolute inset-0 opacity-10">
                    <GiArtificialIntelligence className="w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                    🚀 Master Data Science & AI – Free Live Webinar
                </h1>
                <p className="text-lg md:text-2xl mt-4">
                    📅 June 6, 2025 | 🕒 11:00 AM - 1:00 PM | 🧠 No Experience Needed
                </p>
                <a href="#register" className="mt-6 text-lg px-6 py-3 rounded-2xl">
                    🎟️ Reserve My Seat
                </a>
            </section>

            {/* What You'll Learn */}
            <section className="py-16 bg-white text-black">
                <h2 className="text-center text-3xl font-bold mb-10">🧠 What You’ll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
                    {[{
                        title: "Python for Data",
                        icon: <FaPython size={32} />
                    }, {
                        title: "Data Analysis with Pandas",
                        icon: <FaChartBar size={32} />
                    }, {
                        title: "Machine Learning Crash Course",
                        icon: <FaBrain size={32} />
                    }, {
                        title: "Career Roadmap & Resume Tips",
                        icon: <FaUserGraduate size={32} />
                    }].map(({ title, icon }) => (
                        <Card key={title} className="text-center p-6 rounded-2xl shadow-md">
                            <CardContent>
                                <div className="text-indigo-600 mb-3">{icon}</div>
                                <h3 className="font-semibold text-lg">{title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Meet the Speakers */}
            <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700">
                <h2 className="text-center text-3xl font-bold mb-10">🧑‍💻 Meet the Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-48 px-8">
                    <Image src="/Images/Avinash.png" className="rounded-xl" alt="Avinash Kumar" width={400} height={600} />
                    <div>
                        <h2 className="text-3xl font-bold mb-6">🎓 About Your Trainer – Avinash Kumar</h2>
                        <div className="max-w-3xl mx-auto text-lg text-gray-300">
                            <p className="mb-4">
                                Avinash Kumar is an <strong>IBM Certified Data Science Expert</strong> and a nationally recognized trainer in Artificial Intelligence and Quantum Computing. He holds prestigious certifications from <strong>IIT Roorkee</strong> and <strong>CDAC Hyderabad</strong> as a Quantum Computing professional.
                            </p>
                            <p className="mb-4">
                                With <strong>3 international patents</strong> filed in <strong>Germany, United Kingdom, and India</strong> in the fields of AI-ML and IoT, he brings cutting-edge knowledge and real-world problem-solving experience to every session.
                            </p>
                            <p className="mb-4">
                                Avinash has also <strong>published multiple research papers</strong> in top journals across topics like <strong>AI-ML, Data Science, NLP, IoT, and Quantum Computing</strong>. His work is widely acknowledged for bridging the gap between academic innovation and industrial applications.
                            </p>
                            <p>
                                Get ready to learn from a true expert who has trained hundreds of professionals and inspired countless students in their journey toward mastering futuristic technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="register" className="py-20 px-4 bg-white text-black flex justify-center">
                {!submitted ? (
                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onSubmit={handleSubmit}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-4"
                    >
                        <h2 className="text-2xl font-bold text-center">🎟️ Register Now</h2>
                        <Input required name="FullName" placeholder="Full Name" className="bg-white/20" onChange={handleChange} />
                        <Input required name="Email" placeholder="Email" type="email" className="bg-white/20" onChange={handleChange} />
                        <Input required name="Mobile" placeholder="Phone Number" className="bg-white/20" onChange={handleChange} />
                        <Input required name="City" placeholder="City" className="bg-white/20 " onChange={handleChange} />
                        <Input required name="State" placeholder="State" className="bg-white/20" onChange={handleChange} />
                        <div className="flex items-center space-x-2">
                            <Checkbox id="updates" />
                            <label htmlFor="updates" className="text-sm">I’d like to receive updates</label>
                        </div>
                        <Button type="submit" className="w-full text-lg">✅ Submit & Reserve</Button>
                    </motion.form>
                ) : (
                    <motion.div
                        className="text-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-2xl font-bold">🎉 You’re Registered!</h2>
                        <p>Join our WhatsApp Group for updates:</p>
                        <Button className="bg-green-500 text-white" onClick={() => window.open("https://chat.whatsapp.com/HwyQCFk38NYKjWMnCLXD5P", "_blank")}>Join WhatsApp Group</Button>
                       
                    </motion.div>
                )}
            </section>

            {/* Social Proof Section
            <section className="py-16 bg-gray-100 text-black">
                <h2 className="text-center text-3xl font-bold mb-10">📊 What Our Learners Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                    {["Amazing session, learned a lot!", "Clear explanations & valuable career tips.", "Loved the resume guidance – super helpful!"].map((testimonial, i) => (
                        <Card key={i} className="p-6 shadow rounded-2xl">
                            <CardContent>
                                <p className="italic">“{testimonial}”</p>
                                <p className="text-right mt-4 text-sm font-semibold">– Attendee #{i + 1}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <p className="text-lg font-semibold mb-4">Our learners are from</p>
                    <div className="flex justify-center flex-wrap gap-6">
                        {["Google", "Amazon", "TCS", "Infosys", "Capgemini"].map((company) => (
                            <span key={company} className="text-sm px-4 py-2 bg-white rounded shadow">{company}</span>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Final CTA */}
            <section className="py-10 text-center bg-indigo-800 text-white">
                <h2 className="text-2xl font-bold mb-2">💡 Limited Seats Available</h2>
                <p className="mb-4">Last Webinar Hit 1,200+ Attendees!</p>

            </section>
        </div>
    );
}

