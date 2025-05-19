"use client"
import Image from "next/image";
import React from "react";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
export const TruestedCompanies: { imgSrc: string }[] = [
    {
        imgSrc: "/Images/companies/airbnb.svg"
    },
    {
        imgSrc: "/Images/companies/fedex.svg"
    },
    {
        imgSrc: "/Images/companies/google.svg"
    },
    {
        imgSrc: "/Images/companies/hubspot.svg"
    },
    {
        imgSrc: "/Images/companies/microsoft.svg"
    },
    {
        imgSrc: "/Images/companies/walmart.svg"
    },
    
]


// CAROUSEL SETTINGS
const Companies = () => {



    return (
        <section className='text-center' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <h2 className="text-midnight_text text-2xl font-semibold">Trusted by companies of all sizes</h2>
                <div className="py-14 border-b ">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1">
                            {TruestedCompanies.map((item, i) =>
                                <CarouselItem className="pl-1 basis-1/2 lg:basis-1/5" key={i}>

                                    <Image src={item.imgSrc} alt={item.imgSrc} width={116} height={36} />

                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )

}

export default Companies;