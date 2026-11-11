import Container from "../components/Container.jsx";
import HighlightItem from "../components/HighlightItem.jsx";

import { hero } from "../data/hero.js";

export default function Highlights() {
  return (
    <section>
      <Container
        className={`
          grid gap-6 py-6
          md:grid-cols-3
          sm:grid-cols-2
        `}
      >
        {hero.highlights.map((ht, index) => (
          <div key={index}>
            <HighlightItem
              icon={ht.icon}
              label={ht.label}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}