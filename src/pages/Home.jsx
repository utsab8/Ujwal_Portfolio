import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-dark text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Education />
        <Skills />
        <Training />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
