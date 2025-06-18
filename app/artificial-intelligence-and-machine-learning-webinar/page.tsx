'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaChartLine, FaUserGraduate } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import Image from "next/image";

const webinarFormSchema = z.object({
    FullName: z.string().min(1, "Full Name is required"),
    Email: z.string().email("Invalid email address"),
    Mobile: z.string().min(10, "Enter a valid phone number"),
    City: z.string().min(1, "City is required"),
    State: z.string().min(1, "State is required"),
});
type WebinarFormData = z.infer<typeof webinarFormSchema>;
export default function AIMLWebinarPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<WebinarFormData>({
        resolver: zodResolver(webinarFormSchema),
    });
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data: WebinarFormData) => {
        const formDataPayload = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formDataPayload.append(key, value);
        });
        formDataPayload.append("Date", new Date().toLocaleDateString());

        try {
            await fetch("https://script.google.com/macros/s/AKfycbxdR6n8YB6sfVTcqYD3pxzjS2ePtWYfqx_HNwYgtqt6jT6SXPS_nHTHhz-wNLNxIFi8-g/exec", {
                method: "POST",
                body: formDataPayload,
            });

            setSubmitted(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            alert("Network error. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
            <section className="text-center py-24 px-4 relative overflow-hidden">
                <div className="animate-pulse absolute inset-0 opacity-10">
                    <GiArtificialIntelligence className="w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                    🤖 Learn AI & ML – Free Live Webinar
                </h1>
                <p className="text-lg md:text-2xl mt-4">
                    📅 June 8, 2025 | 🕒 11:00 AM - 1:00 PM | 🎯 Beginner Friendly
                </p>
                <a href="#register" className="mt-6 text-lg px-6 py-3 rounded-2xl">
                    🎟️ Reserve My Spot
                </a>
            </section>

            <section className="py-16 bg-white text-black">
                <h2 className="text-center text-3xl font-bold mb-10">📘 What You’ll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
                    {[{
                        title: "AI Fundamentals",
                        icon: <GiArtificialIntelligence size={32} />
                    }, {
                        title: "Machine Learning Basics",
                        icon: <FaBrain size={32} />
                    }, {
                        title: "Model Building & Evaluation",
                        icon: <FaChartLine size={32} />
                    }, {
                        title: "Career Growth & Tips",
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

            <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700">
                <h2 className="text-center text-3xl font-bold mb-10">👨‍🏫 Meet the Expert</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-48 px-8">
                    <Image src="/Images/Avinash.png" className="rounded-xl" alt="Avinash Kumar" width={400} height={600} />
                    <div>
                        <h2 className="text-3xl font-bold mb-6">🎓 Your Mentor – Avinash Kumar</h2>
                        <div className="max-w-3xl mx-auto text-lg text-gray-300">
                            <p className="mb-4">
                                Avinash Kumar is an <strong>AI-ML & Data Science Expert</strong> with multiple international patents and global certifications from IBM, CDAC, and IITs. His expertise has helped thousands of learners advance their careers.
                            </p>
                            <p className="mb-4">
                                With extensive training experience and research publications in AI-ML, NLP, and Data Science, he brings both technical depth and teaching clarity.
                            </p>
                            <p>
                                This is your chance to interact with an industry expert and gain skills that are shaping the future!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="register" className="py-20 px-4 bg-white text-black flex justify-center">
                {!submitted ? (
                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-4"
                    >
                        <h2 className="text-2xl font-bold text-center">🎟️ Register Now</h2>

                        <Input {...register("FullName")} placeholder="Full Name" />
                        {errors.FullName && <p className="text-red-500 text-sm">{errors.FullName.message}</p>}

                        <Input {...register("Email")} placeholder="Email" type="email" />
                        {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}

                        <Input {...register("Mobile")} placeholder="Phone Number" />
                        {errors.Mobile && <p className="text-red-500 text-sm">{errors.Mobile.message}</p>}

                        <Input {...register("City")} placeholder="City" />
                        {errors.City && <p className="text-red-500 text-sm">{errors.City.message}</p>}

                        <Input {...register("State")} placeholder="State" />
                        {errors.State && <p className="text-red-500 text-sm">{errors.State.message}</p>}

                        <Button type="submit">✅ Submit & Reserve</Button>
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

            <section className="py-10 text-center bg-indigo-800 text-white">
                <h2 className="text-2xl font-bold mb-2">📌 Don’t Miss Out</h2>
                <p className="mb-4">Over 1,000+ Learners Joined Our Last AI-ML Webinar!</p>
            </section>
        </div>
    );
}
