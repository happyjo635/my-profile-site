import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Career from '@/components/Career';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Career />
        <Contact />
      </main>
    </div>
  );
}
