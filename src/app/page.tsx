import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/portfolio";
import Resume from "@/components/resume/resume";
import Services from "@/components/services/services";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Contact/>
    </main>
  );
}
