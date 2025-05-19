import Breadcrump from "@/components/Common/Breadcrumb";
import CTA from "@/components/Common/CTA";
import Image from "next/image";

import React from "react";

const images: { src: string; alt?: string }[] = [

    { "src": "https://i.ibb.co/pBnYTDzN/ffa19516-2d43-4add-b9f2-4a9e17d84a85.jpg", "alt": "Workshop Event" },
    { "src": "https://i.ibb.co/wh4jP8x9/f999c51a-71e5-450b-ada6-f269d24f65b8.jpg", "alt": "Workshop Event" },
    { "src": "https://i.ibb.co/8ntqWWqP/a509151e-43b1-4abd-95fc-800e55b2dbdb.jpg", "alt": "Workshop Event" },
    { "src": "https://i.ibb.co/jZJ96wbS/f8bfcbcd-3848-4775-8df9-188d6d79ea51.jpg", "alt": "Workshop Event" },



    { "src": "https://i.ibb.co/z389gBF/7146a478-3287-490f-9b37-77e9cf367e40.jpg", "alt": "Workshop Event" },
    { "src": "https://i.ibb.co/Wvy9tV0R/0219495f-6732-4572-bb19-ceb6467ae258.jpg", "alt": "Workshop Event" },



]

const links = [
    {
        title: "Home",
        link: "/"
    },

]
const MasonryGallery: React.FC = () => {
    return (
        <div>
            <Breadcrump title="Gallery" links={links} page="gallery" />

            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
                        Collaborations & Memories
                    </h2>
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {images.map((img, i) => (
                            <Image
                                key={i}
                                src={img.src}
                                alt={img.alt || `Gallery image ${i + 1}`}
                                width={600}
                                height={600}
                                className="rounded-xl w-full object-cover break-inside-avoid shadow-md hover:scale-105 transition duration-300"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </div>
    );
};

export default MasonryGallery;
