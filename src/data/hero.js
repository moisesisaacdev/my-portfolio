import {
  LuArrowDownRight,
  LuPlay
} from "react-icons/lu";

export const hero = {
  name: "Moisés Isaac",
  role: "Desenvolvedor Web",
  description:
    "Transformo ideias em experiências digitais modernas, funcionais e intuitivas através do código e da criatividade.",
  location: "Luanda, Angola",
  aria: "Frontend & Backend",
  cta: [
    {
      label: 'Projetos em destaque',
      href: '#projects',
      outline: false,
      icon: LuArrowDownRight
    },
    {
      label: 'Um pouco sobre mim',
      href: '#services',
      outline: true,
      icon: LuPlay
    },
  ],

  highlights: [
    {
      icon: 'code',
      label: "Desenvolvimento Web",
    },
    {
      icon: 'brief',
      label: "Projetos Full Stack",
    },
    {
      icon: 'map',
      label: "Luanda, Angola",
    },
  ],
};