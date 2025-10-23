import { Metadata } from 'next';
import Button from '@/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Modele seu Corpo | CalistenyX',
  description: 'Transforme seu corpo com treinos e alcance sua melhor versão.',
};

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-12 z-1 text-white">
        <div>
          {/* Hero Title with Badge */}
          <div className="relative flex items-center">
            <h1
              id="hero-title"
              className="text-7xl md:text-6xl lg:text-8xl uppercase font-bold"
            >
              Modele seu corpo
            </h1>
            <span
              aria-label="Treino Seis vezes por semana"
              className="text-sm uppercase font-bold absolute top-6.5 left-[290px] md:top-20 md:left-[200px] lg:top-31 lg:left-[330px] leading-tight bg-brand px-2 py-2 lg:px-3 lg:py-4"
            >
              6x
              <br />
              Week
            </span>
          </div>

          <p className="text-base md:text-sm lg:text-xl tracking-wider font-body antialiased font-normal">
            Transforme seu corpo com treinos de calistenia e alcance a sua
            melhor versão. Treine em qualquer lugar, sem a necessidade de
            equipamentos caros. Resultados reais, disciplina e melhoria
            constante.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              aria-label="Começar treino de calistenia agora"
              href="/"
              variant="primary"
            >
              Começe Agora
            </Button>
            <Button
              aria-label="Conhecer mais sobre nossos treinos de calistenia"
              href="/"
              variant="outline"
            >
              Conheça mais
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden md:block">
          <Image
            src="/heroimage.png"
            width={500}
            height={500}
            title="Demostração de força - Biceps e Triceps"
            alt="Atleta mostrando sua força"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
