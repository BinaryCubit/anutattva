import Image from "next/image";
import React from "react";

const CTA: React.FC = () => {
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
                    <a
                        href="tel:8398948765"
                        className="inline-block bg-orange-500 text-white font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-orange-600 transition"
                    >
                        Enroll Now
                    </a>
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
            </div>
        </section>
    );
};

export default CTA;
