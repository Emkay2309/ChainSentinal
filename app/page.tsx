import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}