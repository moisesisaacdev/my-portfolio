export default function Button(
  { outline, children, ...props }
) {
  return (
    <button
      className={`
        py-3 px-5 border
        rounded-lg
        flex gap-2
        items-center
        justify-center
        font-semibold
        transition-all
        duration-500
        ${outline ? `
          border-border
          text-muted
          backdrop-blur
          hover:border-primary
          hover:text-primary
        `: `
          border-primary
          bg-primary
          text-background
          hover:border-primary-dark
          hover:bg-primary-dark
        `}
      `}
      {...props}
    >
      {children}
    </button>
  );
}