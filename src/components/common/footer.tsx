import { footer } from '@/data/footer';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container pt-12 md:pt-4 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Logo and Description*/}
        <div className="max-w-md">
          <Link
            href="/"
            aria-label="Página inicial da CalisthenyX"
            className="inline-block text-snow text-3xl md:text-4xl font-bold font-title tracking-wide"
          >
            Calisteny
            <span className="text-brand text-4xl md:text-5xl font-title">
              X
            </span>
          </Link>

          <p className="text-fot font-sub font-normal mt-4">
            A CalisthenyX nasceu com o propósito de transformar o corpo e a
            mente através da calistenia. Aqui, acreditamos que disciplina, foco
            e superação são os verdadeiros pilares da força.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 md:justify-between">
          {footer.map((item, index) => (
            <div key={index}>
              <h2 className="text-snow font-bold font-sub text-lg mb-3">
                {item.title}
              </h2>
              <ul className="space-y-2">
                {item.info.map((list, listIndex) => (
                  <li key={listIndex}>
                    <Link
                      href={'/'}
                      aria-label={list}
                      className="text-fot font-sub font-normal hover:text-snow transition-colors"
                    >
                      {list}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <p className="text-center text-fot font-sub font-normal mt-12 pt-8 border-t border-fot/20">
        2025 © CalisthenyX • Todos os direitos reservados | Desenvolvido por
        danilo1opes
      </p>
    </footer>
  );
}
