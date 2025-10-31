import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import AboutUs from '@/components/landing/about';
import ReadyBody from '@/components/landing/body';
import HeroSection from '@/components/landing/hero';
import Personal from '@/components/landing/personal';
import Pricing from '@/components/landing/preco';
import Program from '@/components/landing/program';
import ChooseUs from '@/components/landing/us';

export default function HomePage() {
  return (
    <>
      <header className="bg-hero-gradient">
        <Navbar />
        <HeroSection />
      </header>

      <main id="main-content">
        <section aria-label="Modalidades">
          <Program />
        </section>

        <section aria-label="Prepare seu corpo">
          <ReadyBody />
        </section>

        <section aria-label="Sobre nós">
          <AboutUs />
        </section>

        <section aria-label="Preços">
          <Pricing />
        </section>

        <section
          aria-label="Treinamento personalizado"
          className="bg-gradient-to-r from-brand via-brand/44 to-brand/0"
        >
          <Personal />
        </section>

        <section aria-label="Por que nos escolher">
          <ChooseUs />
        </section>
      </main>

      <Footer />
    </>
  );
}
