import SectionHeading from "@/components/ui/SectionHeading";

const expertise = [
  {
    number: "01",
    title: "Technical Support & Troubleshooting",
    description:
      "A methodical approach from reported symptom to a clear, documented resolution.",
    skills: [
      "Root-cause analysis",
      "Technical troubleshooting",
      "Issue reproduction",
      "Incident management",
      "Ticket tracking",
      "Technical documentation",
      "Escalation",
    ],
  },
  {
    number: "02",
    title: "Web Hosting & Infrastructure",
    description:
      "Working across the services and configurations that keep websites reachable.",
    skills: [
      "Web hosting",
      "Domain management",
      "DNS & nameservers",
      "SSL certificates",
      "HTTPS configuration",
      "SSH & terminal",
      "Server-side troubleshooting",
    ],
  },
  {
    number: "03",
    title: "Web Technologies",
    description:
      "Development experience that helps me understand how websites behave behind the interface.",
    skills: [
      "WordPress",
      "PHP",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Next.js",
      "SQL",
      "REST APIs",
    ],
  },
  {
    number: "04",
    title: "SaaS & Productivity",
    description:
      "Supporting the platforms people rely on to communicate and work online.",
    skills: [
      "Microsoft 365",
      "Google Workspace",
      "Email services",
      "Website builders",
      "E-commerce platforms",
    ],
  },
  {
    number: "05",
    title: "Tools",
    description:
      "Tools for investigation, website maintenance, and team collaboration.",
    skills: ["Jira", "WP-CLI", "Git", "GitHub", "Postman"],
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section section-pad" id="expertise">
      <div className="site-shell mx-auto">
        <SectionHeading
          index="03"
          eyebrow="Areas of practice"
          title="Technical range."
          highlight="No skill scores."
          description="A set of connected skills shaped by technical support and hands-on web development."
        />
        <div className="expertise-grid grid">
          {expertise.map((category) => (
            <article className="expertise-card" key={category.number}>
              <div className="expertise-card-top">
                <span className="expertise-number">{category.number}</span>
                <span className="expertise-cross" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3 className="text-lg!">{category.title}</h3>
              <p className="text-sm!">{category.description}</p>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <p className="text-xs">{skill}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
