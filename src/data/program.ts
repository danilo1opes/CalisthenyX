interface PropsProgram {
  id: number;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  link: string;
}

export const program: Array<PropsProgram> = [
  {
    id: 1,
    icon: './workout.svg',
    iconAlt: 'Icone De Força',
    title: 'Força Corporal',
    description:
      'Domine o peso do seu próprio corpo. Aprenda a executar movimentos poderosos com técnica e controle.',
    link: 'Começar Agora',
  },
  {
    id: 2,
    icon: './workout.svg',
    iconAlt: 'Icone De Força',
    title: 'Equilíbrio e Controle',
    description:
      'Desenvolva estabilidade, coordenação e consciência corporal. Encontre o equilíbrio entre força e leveza.',
    link: 'Treinar Agora',
  },
  {
    id: 3,
    icon: './workout.svg',
    iconAlt: 'Icone De Força',
    title: 'Resistência',
    description:
      'Aumente sua resistência com treinos intensos de calistenia. Supere seus limites e fortaleça corpo e mente.',
    link: 'Iniciar Treino',
  },
  {
    id: 4,
    icon: './workout.svg',
    iconAlt: 'Icone De Força',
    title: 'Movimentos Avançados',
    description:
      'Aprenda a dominar movimentos como a planche, front lever e muito mais. Transforme-se com dedicação e técnica.',
    link: 'Explorar agora',
  },
];
