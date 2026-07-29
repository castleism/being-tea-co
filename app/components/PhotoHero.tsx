export function PhotoHero({
  eyebrow,
  title,
  emphasis,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="inner-hero page-photo-hero">
      <img className="inner-hero-media" src={image} alt={imageAlt} />
      <p className="eyebrow">{eyebrow}</p>
      <h1>
        {title}
        <br />
        <em>{emphasis}</em>
      </h1>
      <p>{description}</p>
    </section>
  );
}
