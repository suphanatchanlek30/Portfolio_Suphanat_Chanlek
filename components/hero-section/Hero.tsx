// components/hero/Hero.tsx
import heroData from "@/instances/hero-data";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-start justify-center bg-black text-white overflow-hidden">
      {/* Background วงกลมสว่าง */}
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="w-[700px] h-[300px] bg-white/30 rounded-full blur-[180px]"></div>
      </div>
       <div className="container relative z-10 mx-auto flex items-center justify-center px-4 mt-15 md:mt-30 min-h-[400px]">
        {/* ชื่อและเนื้อหาอยู่กลางจอ */}
         <div className="w-full flex justify-center">
          <HeroContent
            title={heroData.title}
            name={heroData.name}
            description={heroData.description}
            buttonText={heroData.buttonText}
          />
        </div>
         <div className="hidden md:block absolute left-30 top-1/3 -translate-y-1/2">
           <HeroImage src={heroData.image} />
         </div>
      </div>
    </section>
  );
}
