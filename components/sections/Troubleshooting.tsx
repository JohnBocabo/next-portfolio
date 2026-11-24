import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the reported issue and gather the details that shape it.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Examine relevant configurations, errors, requests, and system behavior.",
  },
  {
    number: "03",
    title: "Diagnose",
    description:
      "Connect the evidence and narrow down the likely root cause.",
  },
  {
    number: "04",
    title: "Resolve",
    description:
      "Apply an appropriate solution or coordinate a well-informed escalation.",
  },
  {
    number: "05",
    title: "Document",
    description:
      "Record what was checked, what changed, and what was learned.",
  },
];

export default function Troubleshooting() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="site-shell mx-auto">
        <SectionHeading
          index="04"
          eyebrow="How I work through an issue"
          title="A clear path"
          highlight="from symptom to cause."
          description="My general approach to troubleshooting: structured enough to be thorough, flexible enough to follow the evidence."
        />
        <ol className="approach-list grid">
          {steps.map((step) => (
            <li className="approach-step" key={step.number}>
              <span className="approach-step-number"><p className="text-sm!">{step.number}</p></span>
              <span className="approach-step-marker" aria-hidden="true" />
              <h3 className="text-lg!">{step.title}</h3>
              <p className="text-sm!">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="approach-note text-sm!">
          A personal working method, not an official workflow.
        </p>
      </div>
    </section>
  );
}
