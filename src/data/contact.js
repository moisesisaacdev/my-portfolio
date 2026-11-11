import { LuGithub, LuMail } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";

export const contact = [
  {
    label: 'Whatsapp',
    href: `${import.meta.env.VITE_WHATSAPP_ADDR}?text=${encodeURIComponent('Olá, *Moisés Isaac!*')
      }`,
    icon: SiWhatsapp
  },
  {
    label: 'E-mail',
    href: `mailto:${import.meta.env.VITE_EMAIL_ADDR}`,
    icon: LuMail
  },
  {
    label: 'Github',
    href: import.meta.env.VITE_GITHUB_PROFILE,
    icon: LuGithub
  }
];