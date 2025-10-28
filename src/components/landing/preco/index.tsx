import { prices } from '@/data/payment';
import Button from '@/ui/button';
import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  return (
    <section
      aria-labelledby="pricing-title"
      className="container px-6 py-12 md:py-20 lg:py-24"
    >
      {/* Title */}
      <header className="flex justify-center">
        <h2
          id="pricing-title"
          className="text-3xl md:text-4xl uppercase text-snow font-title font-bold mb-8 md:mb-12 lg:mb-18"
        >
          Planos
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
        {prices.map((price, index) => (
          <article
            key={index}
            className={`border-gray rounded-4xl transition-all ${
              index == 1
                ? 'bg-gradient-to-b from-linear-snow to-linear-dark px-6 md:px-8 py-6 md:scale-110 shadow-2xl'
                : 'bg-program border px-6 py-4 shadow-xl'
            }`}
            aria-label={`Plano ${price.title} - R$${price.value} por mês`}
          >
            <div>
              {/* Title Card */}
              <h3 className="text-snow font-value text-lg md:text-xl font-semibold after:content-[''] after:block after:w-full after:h-[1px] after:bg-snow after:mt-4">
                Plano {price.title}
              </h3>

              {/* Price Card */}
              <div className="flex gap-3 md:gap-4 mt-4 items-end">
                <p className="text-4xl md:text-5xl lg:text-6xl text-snow font-sub">
                  <span className="sr-only">Preço: </span>R${price.value}
                </p>
                <p
                  className={`font-value font-semibold text-2xl md:text-3xl lg:text-4xl ${
                    index === 1 ? 'text-snow' : 'text-brand'
                  }`}
                >
                  {price.subValue}
                </p>
              </div>

              <p className="mt-2 text-snow font-sub font-light text-sm md:text-base">
                {price.description}
              </p>

              <ul
                className="space-y-4 md:space-y-6 mt-6"
                aria-label={`Benefícios do plano ${price.title}`}
              >
                {price.services.map((service, i) => (
                  <li
                    key={i}
                    className="text-snow font-sub font-normal text-sm md:text-base flex gap-3 md:gap-4 items-center"
                  >
                    <FiCheck
                      className={`flex-shrink-0 ${
                        index === 1 ? 'text-snow' : 'text-orange-500'
                      }`}
                      size={24}
                      aria-hidden="true"
                    />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-6 mb-6 md:mb-8">
                <Button
                  aria-label={`Assinar plano ${price.title} por R$${price.value} por mês`}
                  href="/"
                  variant={index === 1 ? 'secondary' : 'outline'}
                >
                  Começe Agora
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
