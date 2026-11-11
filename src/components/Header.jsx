import { useState } from "react";

import Container from './Container';
import Logo from './Logo';
import Navbar from "./Navbar.jsx";

export default function Header() {
  const [y, setY] = useState(0);

  window.onscroll = () => setY(window.scrollY);

  return (
    <header
      className={`
        max-md:bg-surface
        ${y >= 20 && 'md:bg-surface shadow'}
        py-5 fixed top-0 z-99 w-full
        transition-all duration-600
      `}
    >
      <Container
        className={`
          flex items-center
          justify-between
        `}
      >
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}