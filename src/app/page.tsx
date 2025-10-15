import Navbar from '@/components/common/navbar';
import HeroSection from '@/components/landing/hero';
import Program from '@/components/landing/program';

export default async function HomePage() {
  return (
    <>
      <div className="bg-hero-gradient">
        <Navbar />
        <HeroSection />
      </div>

      <section>
        <Program />
      </section>
    </>
  );
}
