import Image from "next/image";
import React from "react";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Students attending AI Workshop",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Data Science Bootcamp Session",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Full Stack Development Demo",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Quantum Computing Lecture",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Certificate Distribution Ceremony",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Anutattva Team and Students",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Life at Anutattva
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
