import HeroSection from "@/sections/hero-section/page";
import NavbarSection from "@/sections/navbar-section/page";

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <div>
        <HeroSection />
      </div>
    </main>
  );
}
