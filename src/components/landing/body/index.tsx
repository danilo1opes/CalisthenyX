import Button from '@/ui/button';
import Image from 'next/image';

export default function ReadyBody() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container py-12 md:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
        {/* Info Column */}
        <div className="order-1 md:order-2">
          <h1
            id="hero-title"
            className="text-snow text-5xl lg:text-7xl font-sub font-black uppercase mb-6 lg:mb-8"
          >
            Pronto para elevar seu corpo
          </h1>

          <Button
            href="/"
            variant="secondary"
            ariaLabel="Começar treinamento agora"
          >
            Comece Agora
          </Button>

          <p className="text-snow mt-6 lg:mt-8 font-body antialiased text-base lg:text-xl leading-relaxed">
            Transforme seu corpo com treinos de calistenia e alcance a sua
            melhor versão. Treine em qualquer lugar, sem a necessidade de
            equipamentos caros. Resultados reais, disciplina e melhoria
            constante.
          </p>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2">
          <Image
            src="/body-image.jpg"
            width={500}
            height={500}
            title="Treino de Calistenia - Movimento Planche Avançado"
            alt="Atleta demonstrando movimento avançado de planche em treino de calistenia"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
