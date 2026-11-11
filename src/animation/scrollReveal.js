import gsap from "gsap";

export function scrollReveal(scope) {
  const ctx = gsap.context(() => {
    gsap.from(".reveal", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });
  }, scope);
  return () => ctx.revert();
}