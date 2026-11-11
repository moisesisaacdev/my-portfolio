export default function Input({ ...props }) {
  return (
    <>
      <input
        {...props}
        className={`
          p-4 rounded-lg
          bg-surface
          outline-none
          border border-border
          focus:border-primary
          focus:ring-2
          focus:ring-primary-muted
        `}
      />
    </>
  );
}