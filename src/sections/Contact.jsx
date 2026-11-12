import Container from "../components/Container.jsx";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";
import Button from "../components/Button.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import { useLayoutEffect, useRef, useState } from "react";
import { scrollReveal } from "../animation/scrollReveal.js";
import { contact } from "../data/contact.js";
import { sendMessage } from "../services/email.js";
import { LuArrowUpRight } from "react-icons/lu";
import { useForm } from "react-hook-form";

export default function Contact() {
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

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
            onSubmit={handleSubmit(async data => {
              try {
                setLoading(true);

                await sendMessage(data);

                reset()
                
                alert('Obrigado  por entrar em contacto.');
              } catch {
                alert('Falha ao enviar mensagem.');
              } finally {
                setLoading(false);
              }
            })}
          >
            <div className={`
              grid grid-cols-2 gap-2
            `}>
              <Input
                placeholder="Nome"
                {...register('name')}
              />
              <Input
                placeholder="E-mail"
                {...register('email')}
              />
            </div>
            <div>
              <Textarea
                {...register('message')}
                placeholder="Digite a sua mensagem..."
              />
            </div>
            <div className="grid">
              <Button
                disabled={loading}
              >
                {loading ? 'A enviar...' : 'Enviar mensagem'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}