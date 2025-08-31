import AboutSection from "@/sections/about-section/page";
import FooterSection from "@/sections/footer-section/page";
import HeroSection from "@/sections/hero-section/page";
import MyServicesSection from "@/sections/my-services-section/page";
import NavbarSection from "@/sections/navbar-section/page";
import PortfolioSection from "@/sections/portfolio-section/page";
import ProgrammingSkillSection from "@/sections/programming-skill-section/page";

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <div>
        <HeroSection />
        <MyServicesSection />
        <AboutSection />
        <ProgrammingSkillSection />
        <PortfolioSection />
      </div>
      <FooterSection />
    </main>
  );
}
