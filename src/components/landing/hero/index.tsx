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
        <div className="space-y-6 md:space-y-8">
          {/* Hero Title with Badge */}
          <div className="relative">
            <h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-bold leading-tight"
            >
              Modele seu corpo
            </h1>

            {/* Training Frequency */}
            <span
              className="absolute -top-2 -right-4 md:top-0 md:right-0 lg:-top-4 lg:-right-8 text-xs md:text-sm uppercase font-bold leading-tight bg-brand px-3 py-2 lg:px-4 lg:py-3 whitespace-nowrap"
              aria-label="Treino seis vezes por semana"
            >
              6x
              <br />
              Week
            </span>
          </div>

          {/* Hero Description */}
          <p className="text-base md:text-lg lg:text-xl tracking-wide font-normal max-w-xl">
            Transforme seu corpo com treinos de calistenia e alcance a sua
            melhor versão. Treine em qualquer lugar, sem a necessidade de
            equipamentos caros. Resultados reais, disciplina e melhoria
            constante.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              href="/cadastro"
              variant="primary"
              aria-label="Começar treino de calistenia agora"
            >
              Começe Agora
            </Button>
            <Button
              href="/sobre"
              variant="outline"
              aria-label="Conhecer mais sobre nossos treinos de calistenia"
            >
              Conheça mais
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden md:flex md:items-end md:justify-center">
          <Image
            src="/heroimage.png"
            width={500}
            height={500}
            alt="Atleta praticando calistenia com exercícios de peso corporal"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
