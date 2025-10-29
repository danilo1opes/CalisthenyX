import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import AboutUs from '@/components/landing/about';
import ReadyBody from '@/components/landing/body';
import HeroSection from '@/components/landing/hero';
import Personal from '@/components/landing/personal';
import Pricing from '@/components/landing/preco';
import Program from '@/components/landing/program';
import ChooseUs from '@/components/landing/us';

export default async function HomePage() {
  return (
    <>
      <div className="bg-hero-gradient">
        <Navbar />
        <HeroSection />
      </div>

      <section>
        <Program />
        <ReadyBody />
        <AboutUs />
        <Pricing />
        <div className="bg-gradient-to-r from-brand via-brand/44 to-brand/0">
          <Personal />
        </div>
        <ChooseUs />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
