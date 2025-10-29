import { program } from '@/data/program';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

export default function Program() {
  return (
    <section
      aria-labelledby="program-heading"
      className="bg-program-radial pt-12 md:pt-14 lg:py-20 xl:py-24"
    >
      <div className="container">
        <div className="flex justify-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          {/* Program Title */}
          <h1
            id="program-heading"
            className="text-3xl md:text-4xl xl:text-5xl uppercase text-snow font-title font-bold"
          >
            Modalidades
          </h1>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-8 lg:pb-24 xl:pb-32">
          {program.map((item) => (
            <article
              key={item.id}
              className="bg-program border border-snow text-snow py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 xl:py-14 xl:px-12 space-y-4 md:space-y-5 lg:space-y-6 hover:border-brand transition-colors"
            >
              {/* Image Card */}
              <Image
                src={item.icon}
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                alt={item.iconAlt}
              />

              {/* Title and Description Card */}
              <h2 className="font-title text-lg md:text-xl lg:text-2xl">
                {item.title}
              </h2>
              <p className="font-sub text-sm md:text-base lg:text-base font-light text-body leading-relaxed">
                {item.description}
              </p>

              {/* Button Card */}
              <Link
                aria-label={`Saiba mais sobre ${item.title}`}
                className="font-body flex items-center gap-3 md:gap-4 text-sm md:text-base hover:text-brand transition-colors pt-2"
                href={'/'}
              >
                {item.link}
                <FaArrowRightLong size={20} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
