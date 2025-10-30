import Image from 'next/image';

export default function Personal() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <Image
              src="/lopes.png"
              fill
              alt="Personal Trainer - Danilo Lopes"
              className="rounded-full object-cover shadow-2xl ring-4 ring-snow/10"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col text-center md:text-left max-w-xl">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-value font-semibold text-snow mb-2 tracking-tight">
              Danilo Lopes
            </h1>
            <p className="text-xl md:text-2xl font-light font-sub text-snow  tracking-wide">
              Calistenico
            </p>
          </div>

          <p className="text-base md:text-lg font-light font-sub text-snow leading-relaxed">
            Transforme seu corpo usando apenas o peso corporal. Especialista em
            calistenia com anos de experiência em treinos funcionais e
            desenvolvimento de força natural.
          </p>
        </div>
      </div>
    </section>
  );
}
