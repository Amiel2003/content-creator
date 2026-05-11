import { NavBar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/Intro";
import { SkillSection } from "@/components/sections/Skills";
import BackgroundSection from "@/components/sections/Background";
import Works from "@/components/sections/Works";
import ContactSection from "@/components/sections/Contact";
import { contacts } from "@/lib/arrays";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans dark:bg-black bg-accent-foreground">
      <NavBar />
      <HeroSection />
      <IntroSection />
      {/* <SkillSection /> */}
      <Works />
      {/* <BackgroundSection /> */}
      <ContactSection contacts={contacts} />
    </div>
  );
}
