import Footer from "@/components/layout/Footer";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-grid" aria-hidden="true" />
      <div className="site-shell contact-shell mx-auto">
        <p className="eyebrow">
          <span className="eyebrow-index">06</span> Start a conversation
        </p>
        <div className="contact-heading grid">
          <h2>
            Let&apos;s get
            <br />
            <span>to the good part.</span>
          </h2>
          <div className="contact-intro">
            <p className="text-sm!">
              Have a role, a technical challenge, or a conversation in mind?
              I&apos;d be glad to hear from you.
            </p>
            <div className="contact-actions">
              <a
                className="button button-lime text-sm!"
                href="mailto:johndoebocabo@gmail.com"
              >
                Email me <ArrowIcon diagonal />
              </a>
              {/* <a className="resume-button" href="/resume.pdf" download>
                Download resume <ArrowIcon />
              </a> */}
            </div>
          </div>
        </div>
        <div className="contact-details">
          <a
            className="contact-item contact-email"
            href="mailto:johndoebocabo@gmail.com"
          >
            <span className="text-sm!">Email</span>
            <strong>johndoebocabo@gmail.com</strong>
            <ArrowIcon diagonal />
          </a>
          <a
            className="contact-item"
            href="https://www.linkedin.com/in/john-bocabo-b8a798240/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile placeholder; replace with your profile URL"
          >
            <span className="text-sm!">LinkedIn</span>
            <strong>https://www.linkedin.com/in/john-bocabo-b8a798240/</strong>
            <ArrowIcon diagonal />
          </a>
          <a
            className="contact-item"
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile placeholder; replace with your profile URL"
          >
            <span className="text-sm!">GitHub</span>
            <strong>Profile link to be added</strong>
            <ArrowIcon diagonal />
          </a>
          <div className="contact-item contact-location">
            <span className="text-sm!">Location</span>
            <strong>Cebu City, Philippines</strong>
            <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
              <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
              <circle cx="10" cy="8" r="2" />
            </svg>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
