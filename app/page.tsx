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
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <main id="top" className="container">
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
