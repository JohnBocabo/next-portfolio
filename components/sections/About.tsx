import ArrowIcon from "@/components/ui/ArrowIcon";

export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="site-shell mx-auto">
        <div className="section-heading">
          <p className="eyebrow">
            <span className="eyebrow-index">01</span> A little about me
          </p>
          <h2>
            Support starts with
            <br />
            <span>understanding.</span>
          </h2>
        </div>
        <div className="about-content grid">
          <p className="about-lead">
            I&apos;m John, a Technical Support Specialist and a
            BSIT graduate with a foundation in web development.
          </p>
          <div className="about-detail">
            <p className="text-sm!">
              My development background gives me a practical view of how
              websites, applications, and databases fit together. I bring that
              perspective to support by examining errors, tracing behavior,
              and narrowing down possible causes instead of stopping at the
              first symptom.
            </p>
            <p className="text-sm!">
              I&apos;m especially interested in application support and the
              systems behind a service: understanding how each piece works,
              explaining what I find, and making the next step clear.
            </p>
            <a className="text-link" href="#expertise">
              See what I work with <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="about-note">
          <span className="about-note-rule" aria-hidden="true" />
          <p>
            Web technologies give me context.
            <br />
            Careful investigation gets to the cause.
          </p>
          <span className="about-note-mark" aria-hidden="true">
            J.
          </span>
        </div>
      </div>
    </section>
  );
}
