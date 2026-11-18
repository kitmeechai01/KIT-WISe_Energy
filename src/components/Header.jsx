import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({ jump }) {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // กดโลโก้: ถ้าอยู่หน้าอื่นให้กลับหน้าหลัก (hero) ถ้าอยู่หน้าหลักอยู่แล้วให้เลื่อนขึ้นบนสุด
  const goHome = () => {
    setNavOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleJump = (id) => {
    jump(id);
    setNavOpen(false);
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <button className="logo" onClick={goHome} aria-label="KIT-WISe home">
          <img src="/assets/KW-LOGO.png" alt="KIT-WISe" className="logo-img" />
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
