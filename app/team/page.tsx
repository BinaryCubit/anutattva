import Breadcrump from "@/components/Common/Breadcrumb";
import CTA from "@/components/Common/CTA";
import Image from "next/image";
import React from "react";

type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Mr. Aman Kumar",
        role: "Director",
        imageUrl: "/images/team1.jpeg",
    },
    {
        name: "Mr. Sunil Kumar",
        role: "CEO",
        imageUrl: "/images/team2.jpeg",
    },
    {
        name: "Mr. Sajid Khan",
        role: "Chief Marketing Offier",
        imageUrl: "/images/team3.png",
    },
    {
        name: "Mr. Avinash Sood",
        role: "CTO and Sr. Lead Trainer ( Ex- IBM, CDAC and IBM certified Data Science and Quantum Expert)",
        imageUrl: "/images/team4.jpeg",
    },
];

type Trainer = {
    name: string;
    role: string;
    imageUrl: string;
};

const Trainers: Trainer[] = [
    {
        name: "Mr. Rahul Kumar",
        role: "Microsoft and Google Certified DevOps Expert",
        imageUrl: "/Images/trainer1.jpg",
    },
    {
        name: "Mr. Himanshu Arora",
        role: "Data Science Expert",
        imageUrl: "/Images/trainer2.jpeg",
    },
    {
        name: "Ms. Nandini Agarwal",
        role: "IBM Certified MERN Stack Expert",
        imageUrl: "/Images/trainer3.jpeg",
    },
    
];
const links = [
    {
        title: "Home",
        link: "/"
    },
    
]
const TeamPage: React.FC = () => {
    return (
        <div>
            <Breadcrump title="Our Team" links={links} page="team"/>
            <section className="bg-gray-50 py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Team
                    </h2>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Director's Message */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                Director&apos;s Message
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At <strong>Anutattva Foundation</strong>, we believe that education is
                                the most powerful tool for transformation. Our mission is to create a
                                learning ecosystem that nurtures creativity, fosters innovation, and
                                equips individuals with the skills needed for tomorrow&apos;s challenges.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                From Artificial Intelligence to Quantum Computing, our courses are
                                designed not just to teach but to inspire. We are building a generation
                                of thinkers, builders, and leaders who are ready to shape the future.
                            </p>
                            <p className="font-semibold text-gray-800">— Aman Kumar, Director</p>
                        </div>

                        {/* Team Members */}
                        <div className="space-y-6">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.name}
                                    className="bg-white p-6 rounded-xl shadow flex items-center gap-4"
                                >
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        width={600}
                                        height={600}
                                        className="w-32 h-32 rounded-xl object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-400 py-16 px-6 md:px-12 space-y-5">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-2xl text-bold">Our Trainers</h1>
                        <p>More Than Trainers – They’re Your Growth Partners.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4 ">
                    {Trainers.map((member) => (
                                <div
                                    key={member.name}
                                    className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-4 text-center"
                                >
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        width={600}
                                        height={600}
                                        className="w-full h-96 rounded-xl"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
            </section>
            <CTA/>
        </div>
    );
};

export default TeamPage;
