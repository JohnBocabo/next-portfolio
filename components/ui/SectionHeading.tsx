type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${description ? " section-heading-row" : ""} ${className}`}
    >
      <div>
        <p className="eyebrow">
          <span className="eyebrow-index">{index}</span> {eyebrow}
        </p>
        <h2>
          {title}
          <br />
          <span>{highlight}</span>
        </h2>
      </div>
      {description && <p className="section-intro text-sm!">{description}</p>}
    </div>
  );
}
