import { useState } from "react";

export default function Header({ jump }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleJump = (id) => {
    jump(id);
    setNavOpen(false);
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="KIT-WISe home">
          <img src="public/assets/KW-LOGO.png" alt="KIT-WISe" className="logo-img" />
        </button>
        <ul className={`nav-links${navOpen ? " open" : ""}`}>
          <li><button onClick={() => handleJump("solutions")}>Solutions</button></li>
          <li><button onClick={() => handleJump("projects")}>Projects</button></li>
          <li><button onClick={() => handleJump("why")}>Technology</button></li>
          <li><button onClick={() => handleJump("awards")}>Awards</button></li>
        </ul>
        <div className="nav-cta">
          <button className="btn btn-solid" style={{ padding: "14px 24px", fontSize: 15 }} onClick={() => handleJump("contact")}>
            Contact Us
          </button>
          <button className="burger" aria-label="Toggle menu" aria-expanded={navOpen} onClick={() => setNavOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
