import { metadata } from '@/lib/metadata';
import { inter, montserrat } from './fonts';
import './globals.css';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
