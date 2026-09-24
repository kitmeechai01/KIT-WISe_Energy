import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Why from "./components/Why";
import Projects from "./components/Projects";
import Trusted from "./components/Trusted";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * KIT-WISe — Smart Energy landing page
 * ------------------------------------
 * Setup:
 * 1. Add the Google Fonts link below to your public/index.html <head>
 *    (or import it in your global CSS):
 *
 *    <link rel="preconnect" href="https://fonts.googleapis.com">
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet">
 *
 * All styling lives in src/index.css (plain CSS, works with any bundler —
 * no Tailwind required). Colors live in the :root CSS variables — change
 * them there to re-theme the whole page.
 */
export default function App() {
  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header jump={jump} />
      <Hero jump={jump} />
      <Solutions />
      <Why />
      <Projects />
      <Trusted />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}
