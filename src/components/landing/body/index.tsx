import Image from 'next/image';

export default function ReadyBody() {
  return (
    <section
      aria-labelledby="readybody-title"
      className="container py-12 md:py-20"
      role="region"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
        {/* Column Text */}
        <div className="order-1 md:order-2">
          <h2
            id="readybody-title"
            className="text-snow text-5xl lg:text-7xl font-sub font-black uppercase mb-6 lg:mb-8 2xl:text-8xl"
          >
            Pronto para elevar seu corpo
          </h2>

          <p className="text-snow mt-6 lg:mt-8 font-body antialiased text-base lg:text-xl 2xl:text-2xl leading-relaxed">
            Transforme seu corpo com treinos de calistenia e alcance a sua
            melhor versão. Treine em qualquer lugar, sem a necessidade de
            equipamentos caros. Resultados reais, disciplina e melhoria
            constante.
          </p>
        </div>

        {/* Colunm Image */}
        <figure className="order-1 md:order-2">
          <Image
            src="/body-image.jpg"
            width={500}
            height={500}
            alt="Atleta demonstrando o movimento avançado de planche em treino de calistenia"
            title="Treino de Calistenia - Movimento Planche Avançado"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <figcaption className="sr-only">
            Demonstração de força e equilíbrio com o movimento planche, exemplo
            de treino avançado de calistenia.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
