import SectionHeading from "@/components/ui/SectionHeading";

const responsibilities = [
  "Support customers across web hosting, cloud, domains, email, and SaaS products.",
  "Troubleshoot WordPress installations, migrations, logins, plugin and theme conflicts, and website errors.",
  "Investigate DNS, nameserver, SSL, redirect, and HTTPS configuration issues.",
  "Diagnose hosting problems involving file permissions, server configuration, PHP errors, and database connectivity.",
  "Use SSH, linux commands, and WP-CLI to investigate website files and WordPress configurations.",
  "Examine error messages, HTTP response codes, and application behavior to identify root causes.",
  "Document findings and coordinate with developers and technical teams on complex cases.",
];

export default function Experience() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="site-shell mx-auto">
        <SectionHeading
          index="02"
          eyebrow="The work"
          title="Experience in"
          highlight="the real world."
          description="Technical support is equal parts investigation, communication, and knowing which layer to look at next."
        />
        <article className="experience-card">
          <div className="experience-meta">
            <span className="experience-current">
              <span className="status-dot" /> Current role
            </span>
            <span>2025 — Present</span>
          </div>
          <div className="experience-main grid">
            <div className="experience-title">
              <p className="experience-company">
                IONOS <span>·</span> Cebu City, Philippines
              </p>
              <h3>
                Technical Support
                <br />
                Representative
              </h3>
              <p className="experience-context text-sm!">
                Helping customers resolve the technical issues behind their
                websites, infrastructure, and online services.
              </p>
            </div>
            <div className="responsibility-list">
              <p className="list-label">What I work across</p>
              <ul>
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} >
                    <span className="list-check " aria-hidden="true">
                      ↗
                    </span>
                    <p className="list-text text-sm">
                    {responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="experience-tags" aria-label="Focus areas">
            <span ><p className="text-xs">Hosting</p> </span>
            <span ><p className="text-xs">WordPress</p></span>
            <span ><p className="text-xs">DNS & SSL</p></span>
            <span ><p className="text-xs">Cloud & SaaS</p></span>
            <span ><p className="text-xs">Root-cause analysis</p></span>
          </div>
        </article>
        <div className="internship-row">
          <span className="internship-mark" aria-hidden="true">
            +
          </span>
          <div>
            <p className="internship-label text-xl!">
              Earlier experience <span>·</span> Feb — Jun 2025
            </p>
            <h3>
              Student Intern{" "}
              <span>at Eastern Visayas State University</span>
            </h3>
            <p className="internship-context text-sm!">
              Supported records and documentation, and helped coordinate
              seminars, training, and outreach activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
