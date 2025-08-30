// components/hero/HeroContent.tsx
import HeroButton from "./HeroButton";

interface HeroContentProps {
  title: string;
  name: string;
  description: string;
  buttonText: string;
}

export default function HeroContent({
  title,
  name,
  description,
  buttonText,
}: HeroContentProps) {
  return (
    <div className="text-center md:text-center max-w-3xl">
      <p className="text-[#929CA5] mb-2 text-xl font-normal">{title}</p>
      <h1 className="text-[#FFFFFF] opacity-90 text-[64px] font-semibold mb-4">{name}</h1>
      <p className="text-[#929CA5] text-lg font-normal">{description}</p>
      <HeroButton text={buttonText}/>
    </div>
  );
}
