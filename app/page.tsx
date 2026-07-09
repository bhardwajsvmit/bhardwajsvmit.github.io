import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Impact from '@/components/Impact';
import Jobs from '@/components/Jobs';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Featured />
      <Impact />
      <Jobs />
      <About />
      <Contact />
    </>
  );
}
