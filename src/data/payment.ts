interface Reward {
  title: string;
  value: number;
  subValue: string;
  description: string;
  services: string[];
  featured?: boolean;
}

export const prices: Array<Reward> = [
  {
    title: 'Iniciante',
    value: 89,
    subValue: '/Mês',
    description:
      'Perfeito para quem está começando sua jornada na calistenia e quer construir uma base sólida',
    services: [
      'Acesso à plataforma de treinos',
      'Treinos básicos de calistenia',
      'Vídeos tutoriais fundamentais',
      'Grupo de WhatsApp exclusivo',
      'Planilha de progressão mensal',
      'Suporte via chat',
    ],
  },

  {
    title: 'Intermediario',
    value: 149,
    subValue: '/Mês',
    description:
      'Ideal para atletas que já dominam o básico e querem evoluir para movimentos mais complexos',
    services: [
      'Tudo do plano Iniciante',
      'Personal trainer online dedicado',
      'Treinos avançados e progressões',
      'Plano nutricional personalizado',
      'Avaliação física mensal',
      'Aulas ao vivo semanais',
    ],
    featured: true,
  },

  {
    title: 'Avançado',
    value: 249,
    subValue: '/Mês',
    description:
      'Para atletas sérios que buscam dominar skills avançados e máxima performance na calistenia',
    services: [
      'Tudo dos planos anteriores',
      'Consultoria individual semanal',
      'Programa de hipertrofia calistênica',
      'Suplementação personalizada',
      'Acesso vitalício ao conteúdo',
      'Certificado de atleta',
    ],
  },
];
