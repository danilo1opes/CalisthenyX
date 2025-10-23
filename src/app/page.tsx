import Navbar from '@/components/common/navbar';
import ReadyBody from '@/components/landing/body';
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
        <ReadyBody />
      </section>
    </>
  );
}
