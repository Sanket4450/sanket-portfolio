import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Systems from "@/components/sections/Systems";
import EngineeringInterests from "@/components/sections/EngineeringInterests";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Systems />
        <EngineeringInterests />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}