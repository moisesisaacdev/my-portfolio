export default function Container({ children, className = '' }) {
  return (
    <div className={`
      w-full max-w-300 px-6
      mx-auto ${className}
    `}>
      {children}
    </div>
  );
}