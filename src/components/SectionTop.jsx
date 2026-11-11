export default function SectionTop(
  { num, badge, title, accent, bio }
) {
  return (
    <div className={`
      md:flex items-end
      justify-between
    `}>
      <div>
        <span className={`
          text-muted flex
          items-center gap-2
          uppercase reveal
        `}>
          <span className="text-primary">
            {num}
          </span>
          <span className="w-10 h-[.5px] inline-block bg-muted" />
          {badge}
        </span>
        <h2 className={`
          text-4xl max-w-120 py-8
        `}>
          <span className="reveal">
            {title.split(' ').map((word, index) => (
              <span
                className="reveal inline-block"
                key={index * Math.random() * 8.9}
              >
                {word + '\u00A0'}
              </span>
            ))}
          </span><br />
          <span className="reveal text-primary">
            {accent.split(' ').map((word, index) => (
              <span
                className="reveal inline-block"
                key={index * Math.random() * 8.9}
              >
                {word + '\u00A0'}
              </span>
            ))}
          </span>
        </h2>
      </div>
      <p className="pb-8 text-muted max-w-90 reveal">
        {bio.split(' ').map((word, index) => (
          <span
            className="reveal inline-block"
            key={index * Math.random() * 8.9}
          >
            {word + '\u00A0'}
          </span>
        ))}
      </p>
    </div>
  );
}