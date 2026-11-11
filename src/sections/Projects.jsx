import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import SectionTop from "../components/SectionTop.jsx";

import { useLayoutEffect, useRef } from "react";
import { scrollReveal } from "../animation/scrollReveal.js";
import { projects } from "../data/projects.js";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

export default function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return scrollReveal(
      sectionRef.current
    );
  }, []);

  return (
    <Section
      id='projects'
      ref={sectionRef}
      even={true}
    >
      <Container className="space-y-8">
        <SectionTop
          num='04'
          badge='Portfólio'
          title='Projetos'
          accent='selecionados.'
          bio='Alguns projetos que representam a minha evolução e criatividade como desenvolvedor.'
        />
        <div className={`
          grid gap-5
          md:grid-cols-2
        `}>
          {projects.map((project, index) => {
            return (
              <div className={`
                space-y-4 reveal
                pb-4
              `}
                key={index}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      hover:scale-102
                      transition-all
                      duration-300
                    `}
                  />
                  <a
                    href={project.link}
                    hidden={project.link === '#'}
                    className={`
                      absolute p-3
                      top-4 left-4
                      z-1 bg-primary
                      text-black
                      rounded-lg
                      shadow 
                    `}
                    target="_blank"
                  >
                    <LuArrowUpRight />
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-primary">
                      {project.category}
                    </span>
                    <h3 className="font-semibold text-xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.repo}
                    hidden={project.repo === '#'}
                    className={`
                      p-3 bg-surface-light
                      hover:bg-primary-muted
                      border rounded-lg 
                      border-primary-dark-muted
                      text-primary
                      transition-colors
                      duration-500
                    `}
                    target="_blank"
                  >
                    <LuGithub />
                  </a>
                </div>
                <p className="text-muted pb-4">
                  {project.description}
                </p>
                <div className="space-x-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`
                        py-2 px-4 rounded-lg
                        bg-surface-light
                        border border-border
                        text-xs
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}