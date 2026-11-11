import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import { useLayoutEffect, useRef } from "react";
import { scrollReveal } from "../animation/scrollReveal.js";
import { services } from "../data/services.js";

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  return (
    <Section
      id='services'
      ref={sectionRef}
      even={true}
    >
      <Container className="space-y-8">
        <SectionTop
          num='02'
          badge='O que eu faço'
          title='Serviços que dão vida'
          accent='às ideias.'
          bio='Da concepção à implementação, desenvolvo soluções digitais com atenção aos detalhes.'
        />
        <div>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className={`
                flex gap-4
                items-center
                justify-between
                text-muted reveal
                border-b p-5
                border-border
                hover:bg-surface-light
                ${index === 0 && 'border-t'}
              `}
                key={index}
              >
                <div className={`
                  flex gap-4
                  items-center
                `}>
                  <span className="text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-text">
                      {service.title}
                    </p>
                    <p className="text-xs">
                      {service.description}
                    </p>
                  </div>
                </div>
                <span className="text-primary">
                  <Icon />
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}