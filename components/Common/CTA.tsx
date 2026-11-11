'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import EnrollNow from "./EnrollNow";
import RazorpayButton from "./RazorpayButton";

const CTA: React.FC = () => {
    const [open,setOpen] = useState(false);
    return (
        <section className="bg-[#fdf6ee] py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
                {/* Left Column - Text Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Take the First Step Toward Your Future
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Join <strong>Anutattva Foundation</strong> and gain career-defining skills in Artificial
                        Intelligence, Data Science, Full Stack Development, and Quantum Computing.
                        Learn from industry experts and transform your career.
                    </p>
                   
                   
                </div>

                {/* Right Column - Image or Illustration */}
                <div className="text-center">
                    <Image
                        src="/Images/banner/Cta.jpg"
                        alt="Future Skills Illustration"
                        width={1000}
                        height={1000}
                        className="w-full max-w-md mx-auto rounded-xl"
                    />
                </div>
                <EnrollNow Open={open} onChange={setOpen}/>
            </div>
        </section>
    );
};

export default CTA;
