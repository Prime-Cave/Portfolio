import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import ProblemSolving from "@/components/ProblemSolving";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <main id="top" className="max-w-[1000px] mx-auto px-[clamp(20px,5vw,56px)]">
        <Hero />
        <About />
        <Work />
        <ProblemSolving />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
