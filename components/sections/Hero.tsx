import Navbar from "@/components/layout/Navbar";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-shell hero-shell mx-auto">
        <Navbar />
        <div className="hero-content grid items-center">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              Technical support · Web technologies
            </p>
            <h1 id="hero-title">
              John
              <span className="hero-title-accent">Bocabo</span>
            </h1>
            <p className="hero-tagline">
              Hi, I&apos;m John. I work with technology, troubleshoot problems,
              and like to understand how systems work.
            </p>
            <p className="hero-intro">
              I&apos;m a Technical Support Specialist in Cebu City, Philippines,
              with experience in web hosting, SaaS, WordPress, and web
              technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#experience">
                Explore My Experience <ArrowIcon />
              </a>
              <a className="button button-outline" href="#contact">
                Get in Touch <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-location">
              <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              Cebu City, Philippines
            </div>
          </div>
          <div className="hero-visual">
            <blockquote className="hero-quote">
              <span className="hero-quote-label">A way of thinking</span>
              <p>
                <span>“It&apos;s not just about</span>
                <span>fixing things. It&apos;s about</span>
                <span className="hero-quote-accent">understanding why they</span>
                <span className="hero-quote-accent">break—and learning</span>
                <span>something along the way.”</span>
              </p>
            </blockquote>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span className="scroll-cue-line" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
