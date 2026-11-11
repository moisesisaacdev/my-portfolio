import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import image from '../assets/me.png';

import { scrollReveal } from "../animation/scrollReveal.js";
import { useLayoutEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  return (
    <Section
      id='about'
      ref={sectionRef}
    >
      <Container className="space-y-8">
        <SectionTop
          num='01'
          badge='Sobre mim'
          title='Desenvolvimento com propósito.'
          accent='Código com identidade.'
          bio='A minha trajetória no desenvolvimento web é construída através da aprendizagem contínua, experimentação e dedicação.'
        />
        <div className={`
          md:flex gap-6 
          items-center
          justify-between
          max-md:space-y-8
        `}>
          <div className={`
            rounded-3xl
            overflow-hidden
            p-1 border-3
            border-primary
            md:max-w-100
            reveal
          `}>
            <img
              src={image}
              alt="Moisés Isaac"
              className={`
                rounded-2xl 
                bg-primary
              `}
            />
          </div>
          <div className={`
            space-y-4 text-muted
            max-w-160
          `}>
            <p className="reveal">
              Sou um desenvolvedor web apaixonado pela tecnologia e pela
              criação de soluções digitais. Gosto de transformar problemas
              em soluções através do código.
            </p>
            <p className="reveal">
              Trabalho principalmente com o ecossistema JavaScript,
              desenvolvendo interfaces frontend e aplicações backend,
              procurando sempre escrever código organizado, reutilizável
              e eficiente.
            </p>
            <p className="reveal">
              Acredito que um bom projeto não deve apenas funcionar.
              Também deve proporcionar uma experiência agradável,
              intuitiva e memorável.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}