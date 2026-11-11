import Section from "../components/Section.jsx";
import Container from "../components/Container.jsx";
import Button from '../components/Button.jsx';

import gsap from "gsap";

import { useLayoutEffect, useRef } from "react";
import { hero } from "../data/hero.js";

export default function Hero() {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        delay: 2
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <Section
      id='home'
      ref={sectionRef}
    >
      <Container
        className={`
          flex items-center pt-10
          min-h-[calc(100vh-180px)]
        `}
      >
        <div className={`
          hero-content
          space-y-7
        `}>
          <div className={`
            reveal
            px-6 py-2 border
            border-border
            w-fit rounded-full
            text-muted
            italic text-xs
            backdrop-blur
          `}>
            Olá, eu sou {hero.name}
          </div>
          <h1 className={`
            reveal
            text-hero
            max-w-280
          `}>
            <span className="reveal">Transformando</span> <br />
            <span className="reveal">ideias em</span>
            <br />
            <span className="text-primary">
              <span className="reveal">experiências</span>
              <br />
              <span className="reveal">digitais</span>
            </span> 
            <span className="reveal"> incríveis.</span>
          </h1>
          <p className={`
            text-muted
            max-w-100
            reveal
          `}>
            {hero.description}
          </p>
          <div className={`
            ctas flex 
            max-[540px]:flex-col
            gap-4 pt-3
          `}>
            {hero.cta.map((c, i) => {
              const Icon = c.icon;

              return (
                <a
                  key={i}
                  href={c.href}
                  className="reveal"
                >
                  <Button
                    outline={c.outline}
                  >
                    {c.label}
                    <Icon size={18} />
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}