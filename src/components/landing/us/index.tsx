import { choose } from '@/data/choose';
import Image from 'next/image';
import { FiCheckSquare } from 'react-icons/fi';

export default function ChooseUs() {
  return (
    <section
      role="region"
      aria-labelledby="choose-title"
      className="container pt-12 mb-4 md:pt-24 lg:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center max-w-7xl mx-auto">
        {/* Coluna 1 */}
        <div
          className="hidden md:grid grid-rows-2 gap-4 md:gap-6 h-[400px] md:h-[500px] lg:h-[600px]"
          aria-hidden="true"
        >
          <div className="relative overflow-hidden">
            <Image
              src="/handstand.png"
              width={400}
              height={250}
              role="img"
              className="w-full h-full object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Homem realizando handstand"
            />
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/push.png"
              width={400}
              height={250}
              role="img"
              className="w-full h-full object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Mulher executando flexão com kettlebell"
            />
          </div>
        </div>

        {/* Coluna 2 */}
        <div
          className="order-2 md:order-1 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/planche.png"
            width={500}
            height={600}
            role="img"
            className="w-full h-full object-cover"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Homem demonstrando a posição de planche"
          />
        </div>

        {/* Coluna 3 */}
        <div className="md:col-span-2 lg:col-span-1 order-1 md:order-2 md:pt-12 lg:pt-0">
          <h1
            id="choose-title"
            className="text-snow text-5xl lg:text-7xl font-sub font-black uppercase mb-6 md:mb-8 lg:mb-10"
          >
            Por que nos escolher?
          </h1>

          <ul
            className="space-y-4 md:space-y-5 lg:space-y-6"
            aria-label="Motivos para escolher nossos serviços"
          >
            {choose[0].text.map((list, index) => (
              <li
                key={index}
                className="text-list text-base md:text-lg lg:text-xl flex items-center font-sub font-normal gap-3 md:gap-3 uppercase"
              >
                <FiCheckSquare
                  className="text-brand flex-shrink-0 mt-1"
                  size={28}
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
