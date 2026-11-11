import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import { useLayoutEffect, useRef } from "react";
import { scrollReveal } from "../animation/scrollReveal.js";
import { skills } from "../data/skills.js";

export default function Skills() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  return (
    <Section
      id='skills'
      ref={sectionRef}
    >
      <Container className="space-y-8">
        <SectionTop
          num='03'
          badge='Tecnologias'
          title='Ferramentas para construir'
          accent='o extraordinário.'
          bio='Tecnologias que utilizo para desenvolver aplicações modernas, escaláveis e eficientes.'
        />
        <div className={`
          grid gap-4
          grid-cols-3
          sm:grid-cols-5
          text-center
        `}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div className={`
                flex gap-4
                items-center
                justify-center
                flex-col reveal
                border p-5
                border-border
                rounded-xl
                bg-surface
              `}
                key={index}
              >
                <Icon
                  size={30}
                  color="var(--color-primary)"
                />
                <h3 className="font-semibold">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}