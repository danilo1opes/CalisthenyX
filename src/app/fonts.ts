import { Inter, Montserrat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});
