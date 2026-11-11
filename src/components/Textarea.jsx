export default function Textarea({ ...props }) {
  return (
    <>
      <textarea
        {...props}
        className={`
          p-4 rounded-lg
          bg-surface w-full
          outline-none h-60
          border border-border
          resize-none
          focus:border-primary
          focus:ring-primary-muted
          focus:ring-2
        `}
      />
    </>
  );
}