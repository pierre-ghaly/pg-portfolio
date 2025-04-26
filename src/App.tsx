import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProfessionalProfiles from "./components/ProfessionalProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import JsonLd from "./components/JsonLd";

function App() {
  // TODO: Host on portfolio.pgelmaestro.com and redirect from github to it.
  return (
    <>
      <SEO />
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <ProfessionalProfiles />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
