import Button from '@/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container md:pt-12 lg:pt-0"
      role="region"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-12 z-1 text-white">
        {/* Column Text */}
        <div>
          {/* Hero Title */}
          <div className="relative flex items-center">
            <h1
              id="hero-title"
              className="text-[4.8rem] leading-18 md:leading-20 lg:leading-28 md:text-[5.5rem] lg:text-9xl uppercase font-bold"
            >
              Modele seu corpo
            </h1>

            {/* Badge */}
            <span
              role="note"
              aria-label="Treino seis vezes por semana"
              className="text-sm uppercase font-bold absolute top-25 left-[180px] md:top-28 md:left-[215px] lg:top-38 lg:left-[280px] leading-tight bg-brand px-2 py-2 lg:px-3 lg:py-4"
            >
              6x
              <br aria-hidden="true" />
              Week
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-sm lg:text-xl tracking-wider font-body antialiased font-normal mt-4 md:mt-6">
            Transforme seu corpo com treinos de calistenia e alcance a sua
            melhor versão. Treine em qualquer lugar, sem a necessidade de
            equipamentos caros. Resultados reais, disciplina e melhoria
            constante.
          </p>

          {/* Buttons action */}
          <div
            className="flex gap-4 mt-8"
            role="group"
            aria-label="Ações principais do herói"
          >
            <Button
              aria-label="Começar treino de calistenia agora"
              href="/"
              variant="primary"
            >
              Comece Agora
            </Button>

            <Button
              aria-label="Conhecer mais sobre nossos treinos de calistenia"
              href="/"
              variant="outline"
            >
              Conheça Mais
            </Button>
          </div>
        </div>

        {/* Column Image */}
        <figure className="hidden md:block">
          <Image
            src="/heroimage.png"
            width={500}
            height={500}
            alt="Atleta demonstrando força nos músculos do braço, representando determinação e foco"
            title="Demonstração de força — Bíceps e tríceps"
            className="object-contain object-bottom"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <figcaption className="sr-only">
            Atleta em pose de força, representando o conceito de superação e
            disciplina.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
