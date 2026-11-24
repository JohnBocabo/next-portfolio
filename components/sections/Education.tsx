import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section className="education-section section-pad" id="education">
      <div className="site-shell education-layout grid mx-auto">
        <SectionHeading
          index="05"
          eyebrow="The foundation"
          title="Built on a"
          highlight="technical education."
        />
        <article className="education-card">
          <span className="education-years">2021 — 2025</span>
          <div>
            <p className="education-degree">Bachelor of Science</p>
            <h3>Information Technology</h3>
            <p className="education-school">
              Eastern Visayas State University
            </p>
            <p className="education-location">
              Tacloban City, Leyte, Philippines
            </p>
          </div>
          <span className="education-seal" aria-hidden="true">
            EVSU
          </span>
        </article>
      </div>
    </section>
  );
}
