export default function Section(
  { id, even, children, ...props }
) {
  return (
    <section
      id={id}
      className={`
        py-22
        ${even && `
          bg-surface border-y 
          border-border  
        `}
      `}
      {...props}
    >
      {children}
    </section>
  );
}