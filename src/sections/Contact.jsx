import Container from "../components/Container.jsx";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";
import Button from "../components/Button.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import { useLayoutEffect, useRef } from "react";
import { scrollReveal } from "../animation/scrollReveal.js";
import { contact } from "../data/contact.js";
import { LuArrowUpRight } from "react-icons/lu";

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  return (
    <Section
      id='contact'
      ref={sectionRef}
    >
      <Container className="space-y-8">
        <SectionTop
          num='05'
          badge='Contacto'
          title='Tens uma ideia?'
          accent='Vamos conversar.'
          bio='Tens um projeto em mente, uma oportunidade ou simplesmente queres conversar sobre tecnologia? Estou disponível para trocar ideias.'
        />
        <div className={`
          grid gap-2
          md:grid-cols-2
        `}>
          <div className={`
            space-y-2
          `}>
            {contact.map((c, index) => {
              const Icon = c.icon;

              return (
                <a className={`
                  p-4 text-muted
                  flex justify-between
                  items-center rounded-lg
                  border border-border
                  hover:pl-8 bg-surface
                  hover:bg-surface-light
                  transition-all duration-400
                  cursor-pointer
                `}
                  key={index}
                  href={c.href}
                  target="_blank"
                >
                  <div className={`
                    flex gap-3
                    items-center
                  `}>
                    <Icon
                      color="var(--color-primary)"
                    />
                    <h3>
                      {c.label}
                    </h3>
                  </div>
                  <LuArrowUpRight
                    color="var(--color-primary)"
                  />
                </a>
              );
            })}
          </div>
          <form
            className="space-y-2"
          >
            <div className={`
              grid grid-cols-2 gap-2
            `}>
              <Input 
                placeholder="Nome"
              />
              <Input 
                placeholder="E-mail"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Digite a sua mensagem..."
              />
            </div>
            <div className="grid">
              <Button>
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}