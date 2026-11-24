import ArrowIcon from "@/components/ui/ArrowIcon";

export default function Navbar() {
  return (
    <header className="site-header flex items-center justify-between">
      <a className="wordmark" href="#top" aria-label="John Bocabo, home">
        <span className="wordmark-name">
          <span className="text-xl!">John</span>
          <span className="wordmark-accent text-xl">Bocabo</span>
        </span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a className="text-sm!" href="#about">
          About
        </a>
        <a className="text-sm!" href="#experience">
          Experience
        </a>
        <a className="text-sm!" href="#expertise">
          Expertise
        </a>
        <a className="nav-contact" href="#contact">
          Contact <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  );
}
