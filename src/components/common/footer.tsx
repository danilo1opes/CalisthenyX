import { footer } from '@/data/footer';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="container pt-12 md:pt-4 pb-4"
      role="contentinfo"
      id="contato"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-0 lg:gap-16">
        {/* Logo and Description */}
        <div className="max-w-md">
          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className="inline-block text-snow text-3xl md:text-4xl 2xl:text-5xl font-bold font-title tracking-wide"
          >
            <span aria-hidden="true">
              Calisteny
              <span className="text-brand text-4xl md:text-5xl 2xl:text-6xl font-title">
                X
              </span>
            </span>
          </Link>

          <p className="text-fot font-sub font-normal mt-4 lg:text-lg">
            A CalisthenyX nasceu com o propósito de transformar o corpo e a
            mente através da calistenia. Aqui, acreditamos que disciplina, foco
            e superação são os verdadeiros pilares da força.
          </p>
        </div>

        {/* Navigation Sections */}
        <nav
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 md:justify-start lg:justify-center"
          aria-label="Navegação no rodapé"
        >
          {footer.map((section, index) => (
            <section key={index} aria-labelledby={`footer-heading-${index}`}>
              <h2
                id={`footer-heading-${index}`}
                className="text-snow font-bold font-sub text-lg 2xl:text-xl mb-3"
              >
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.info.map((linkItem, listIndex) => (
                  <li key={listIndex}>
                    <Link
                      href="/"
                      className="text-fot font-sub font-normal hover:text-snow focus:text-snow focus:outline-none focus:underline transition-colors"
                    >
                      {linkItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div
        className="text-center text-fot font-sub font-normal mt-12 pt-8 border-t border-fot/20"
        aria-label="Informações legais e direitos autorais"
      >
        <p>
          <span itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="CalisthenyX" />
            <time dateTime={currentYear.toString()}>{currentYear}</time> ©{' '}
            <span itemProp="name">CalisthenyX</span>
          </span>
          {' • '}
          <span>Todos os direitos reservados</span>
          {' | '}
          <span>
            Desenvolvido por{' '}
            <Link
              href="https://github.com/danilo1opes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-snow transition-colors underline"
              aria-label="Perfil do desenvolvedor Danilo Lopes no GitHub (abre em nova aba)"
            >
              danilo1opes
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
