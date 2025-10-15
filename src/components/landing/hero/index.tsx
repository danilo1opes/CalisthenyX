import Button from '@/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section role="region" aria-labelledby="hero-title" className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-12 z-1 text-white">
        <div>
          <div className="relative flex items-center">
            <h1
              id="hero-title"
              className="text-7xl md:text-6xl lg:text-8xl uppercase font-bold"
            >
              Modele seu corpo
            </h1>
            <span
              aria-label="Seis vezes por semana"
              role="text"
              tabIndex={0}
              className="text-sm uppercase font-bold absolute top-6.5 left-[290px] md:top-20 md:left-[200px] lg:top-31 lg:left-[330px] leading-tight bg-brand px-2 py-2 lg:px-3 lg:py-4"
            >
              6x
              <br />
              Week
            </span>
          </div>

          <div>
            <p
              id="hero-description"
              aria-describedby="hero-description"
              tabIndex={0}
              className="text-base md:text-sm lg:text-xl tracking-wider font-normal"
            >
              Transforme seu corpo com treinos de calistenia e alcance a sua
              melhor versão. Treine em qualquer lugar, sem a necessidade de
              equipamentos caros. Resultados reais, disciplina e melhoria
              constante.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              ariaLabel="Começar o treino agora"
              ariaRole="button"
              ariaIndex={0}
              href="/"
              variant="primary"
            >
              Começe Agora
            </Button>
            <Button
              ariaLabel="Saber mais sobre treinos de calistenia"
              ariaRole="button"
              ariaIndex={0}
              href="/"
              variant="outline"
            >
              Conheça mais
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/heroimage.png"
            width={500}
            height={500}
            alt="Musculação"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
