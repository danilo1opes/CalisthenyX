import { program } from '@/data/program';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Modalidades | CalistenyX',
  description:
    'Conheça as modalidades oferecidas e descubra o programa ideal para você.',
};

export default function Program() {
  return (
    <section
      aria-labelledby="program-heading"
      className="bg-program-radial pt-12 md:pt-14 lg:py-18"
    >
      <div className="container">
        <div className="flex justify-center mb-12 md:mb-14 lg::mb-20">
          {/* Program Title */}
          <h1
            id="program-heading"
            className="text-4xl uppercase text-snow font-title font-bold lg:mb-18"
          >
            Modalidades
          </h1>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:pb-32">
          {program.map((item) => (
            <article
              key={item.id}
              className="bg-program border border-snow text-snow py-8 px-6 md:py-10 md:px-10 space-y-2 md:space-y-6"
            >
              {/* Image Card */}
              <Image
                src={item.icon}
                width={50}
                height={50}
                alt={item.iconAlt}
              />

              {/* Title and Description Card */}
              <h2 className="font-title text-xl">{item.title}</h2>
              <p className="font-sub text-sm font-light text-body">
                {item.description}
              </p>

              {/* Button Card */}
              <Link
                aria-label={`Saiba mais sobre ${item.title}`}
                className="font-body flex items-center gap-4"
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
