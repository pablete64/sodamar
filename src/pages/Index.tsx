import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodologySection from "@/components/MethodologySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AmbientGlow from "@/components/AmbientGlow";
import SectorsSection from "@/components/SectorsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AmbientGlow />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <SectorsSection />
      <MethodologySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
