import { getPinnedRepos } from "@/lib/github";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const repos = await getPinnedRepos();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects repos={repos} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
