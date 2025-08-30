// components/hero/HeroImage.tsx
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt?: string;
}

export default function HeroImage({ src, alt = "Hero Image" }: HeroImageProps) {
  return (
    <div className="flex-shrink-0">
      <Image src={src} alt={alt} width={180} height={180} />
    </div>
  );
}
