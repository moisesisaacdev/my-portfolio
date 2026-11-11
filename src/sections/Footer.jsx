export default function Footer() {
  return (
    <footer className="bg-surface px-5 py-6 text-center text-muted border-t border-border">
      <p>
        &copy;{new Date().getFullYear()} - TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
}