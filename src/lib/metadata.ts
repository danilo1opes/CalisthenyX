import { Metadata } from 'next';

const baseUrl = 'https://www.calistenyx.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'CalisthenyX - Modele Seu Corpo',
  description:
    'Plataforma completa de treinos de calistenia com programas personalizados, acompanhamento profissional e comunidade ativa.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'CalisthenyX - Modele Seu Corpo',
    description:
      'Transforme seu corpo com treinos de calistenia personalizados.',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CalisthenyX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalisthenyX - Treinos de Calistenia Online',
    description:
      'Transforme seu corpo com treinos personalizados de calistenia.',
    images: [`${baseUrl}/twitter-image.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};
