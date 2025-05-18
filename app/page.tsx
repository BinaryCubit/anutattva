
import Courses from "@/components/Home/Courses";
import FAQs from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Companies from "@/components/Home/companies";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Companies/>
      <Courses/>
      <WhyChooseUs/>
      <FAQs/>
    </div>
  );
}
