import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      aria-labelledby="hero-title"
      className="px-6 md:px-8 lg:px-12 md:py-8 lg:py-12 2xl:pb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 md:gap-8 lg:gap-20 2xl:gap-28 items-start max-w-[1920px] 2xl:mx-auto">
        {/* Image 1 */}
        <div className="order-2 md:order-2 lg:order-1 w-full md:w-full lg:w-96 2xl:w-[28rem]">
          <Image
            src={'/pull.jpg'}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg md:rounded-none shadow-lg"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 400px, 450px"
            alt="Homem elevando na barra fazendo um muscle-up"
          />
        </div>

        {/* Image 2  */}
        <div className="hidden lg:order-2 lg:block w-64 2xl:w-80 ml-8 2xl:ml-12 relative">
          <Image
            src={'/forca.jpg'}
            width={300}
            height={400}
            className="w-full h-auto object-cover shadow-lg"
            priority
            loading="eager"
            sizes="(max-width: 1536px) 300px, 350px"
            alt="Homem fazendo barra apenas com um braço"
          />

          {/* Card */}
          <div className="bg-gradient-to-b from-linear-snow to-linear-dark p-2 2xl:p-3 -mt-2 absolute top-65 2xl:top-85 text-center">
            <h3 className="text-white font-sub font-bold text-base 2xl:text-lg mb-2">
              Treinamento de Força
            </h3>
            <p className="text-body text-xs 2xl:text-sm font-sub">
              Treine seu corpo como nunca antes já visto, e explore seus
              instintos de leão
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="order-1 md:order-1 lg:order-3 md:col-span-2 lg:col-span-1">
          <h1
            id="hero-title"
            className="text-snow text-5xl lg:text-7xl font-sub font-black uppercase mb-6 lg:mb-8 2xl:mb-10 2xl:text-8xl"
          >
            Sobre nós
          </h1>

          <p className="text-snow mt-6 lg:mt-8 font-body antialiased text-base lg:text-xl 2xl:text-2xl leading-relaxed lg:max-w-xl 2xl:max-w-2xl">
            Somos apaixonados por calistenia e dedicados a ajudar você a atingir
            seu potencial máximo. Nossa equipe de atletas e treinadores
            especializados está pronta para guiar sua jornada de transformação
            com métodos comprovados e suporte personalizado.
          </p>
        </div>
      </div>
    </section>
  );
}
