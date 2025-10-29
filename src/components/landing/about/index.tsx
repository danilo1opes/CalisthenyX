import Button from '@/ui/button';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      aria-labelledby="hero-title"
      className="px-6 md:px-0 md:py-8 2xl:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 md:gap-20 2xl:gap-28 items-start max-w-[1920px] 2xl:mx-auto">
        {/* Image 1 */}
        <div className="order-2 md:order-1 w-full md:w-80 lg:w-96 2xl:w-[28rem]">
          <Image
            src={'/pull.jpg'}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg md:rounded-none shadow-lg"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 400px, 450px"
            alt="Homem elevando na barra fazendo um muscle-up"
          />
        </div>

        {/* Image 2  */}
        <div className="hidden md:order-2 lg:block w-64 lg:w-64 2xl:w-80 ml-4 lg:ml-8 2xl:ml-12 relative">
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
        <div className="order-1 md:order-3">
          <h1
            id="hero-title"
            className="text-snow text-5xl lg:text-7xl font-sub font-black uppercase mb-6 lg:mb-8 2xl:mb-10"
          >
            Sobre nós
          </h1>

          <Button
            href="/"
            variant="outline"
            ariaLabel="Começar treinamento agora"
          >
            Conheça a equipe
          </Button>

          <p className="text-snow font-body antialiased text-base md:text-lg lg:text-xl leading-relaxed">
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
