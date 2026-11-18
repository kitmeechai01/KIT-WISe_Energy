export default function Hero({ jump }) {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow fade-up">ENERGY TECHNOLOGY COMPANY</div>
          <h1 className="fade-up d1">Powering a smarter<br />energy future.</h1>
          <p className="lede fade-up d2">
            เทคโนโลยีจัดการพลังงานอัจฉริยะ เพื่อธุรกิจที่เติบโตอย่างมีประสิทธิภาพ ปลอดภัย และยั่งยืน
          </p>
          <div className="hero-actions fade-up d3">
            <button className="btn btn-solid" onClick={() => jump("projects")}>ดูผลงานติดตั้ง</button>
            <button className="btn btn-outline" onClick={() => jump("solutions")}>Solutions</button>
          </div>
        </div>
        <div className="hero-art fade-up d4">
          {/* ฉากหลังเทคโนโลยี: แสงเรืองรอง วงโคจร เส้นข้อมูลที่ไหล */}
          <div className="hero-art-glow" aria-hidden="true" />
          <svg className="hero-art-bg" viewBox="0 0 400 400" fill="none" aria-hidden="true">
            <defs>
              <radialGradient id="heroDisc" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#EEF1FF" />
                <stop offset="100%" stopColor="#DDE3FF" />
              </radialGradient>
              <linearGradient id="heroFlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#3B5BFF" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="190" fill="url(#heroDisc)" />
            <circle className="hero-pulse" cx="200" cy="200" r="120" stroke="#3B5BFF" strokeWidth="1.5" />
            <circle className="hero-pulse p2" cx="200" cy="200" r="120" stroke="#22C55E" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="150" stroke="#000863" strokeOpacity="0.14" strokeWidth="1.5" />
            <circle className="hero-ring ring-a" cx="200" cy="200" r="170" stroke="#3B5BFF" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="3 10" strokeLinecap="round" />
            <circle className="hero-ring ring-b" cx="200" cy="200" r="110" stroke="#000863" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="18 12" strokeLinecap="round" />
            <g className="hero-orbit orbit-a">
              <circle cx="200" cy="30" r="5" fill="#22C55E" />
              <circle cx="200" cy="30" r="10" fill="#22C55E" fillOpacity="0.2" />
              <circle cx="370" cy="200" r="3.5" fill="#3B5BFF" />
            </g>
            <g className="hero-orbit orbit-b">
              <circle cx="90" cy="200" r="4.5" fill="#3B5BFF" />
              <circle cx="90" cy="200" r="9" fill="#3B5BFF" fillOpacity="0.18" />
              <circle cx="200" cy="310" r="3.5" fill="#22C55E" />
            </g>
            <g className="hero-flow" stroke="url(#heroFlow)" strokeWidth="2" strokeLinecap="round" fill="none">
              <path d="M200 200C160 230 130 255 92 282" />
              <path d="M200 200C240 170 275 140 322 108" />
              <path d="M200 200C250 225 285 250 318 292" />
            </g>
            <g className="hero-node" fill="#22C55E">
              <circle cx="92" cy="282" r="4" />
              <circle cx="322" cy="108" r="4" />
              <circle cx="318" cy="292" r="4" />
            </g>
          </svg>

          {/* ป้ายลอยสไตล์เทค */}
          <span className="hero-chip chip-1"><i /> Energy Management</span>
          <span className="hero-chip chip-2"><i /> EV Charging</span>
          <span className="hero-chip chip-3"><i /> Smart IoT</span>

          {/* จุดที่ 1: แทนที่สี่เหลี่ยมใหญ่ตรงกลาง */}
          <img
            src="/assets/KW-3PICON.png"
            alt="โซลูชันพลังงานหลักของ KIT-WISe"
            className="hero-img hero-img-main"
          />
          {/* จุดที่ 2: แทนที่สี่เหลี่ยมเล็กด้านล่างซ้าย */}
          <img
            src="/assets/LINE_CHIP.png"
            alt="แผงควบคุมการใช้พลังงาน"
            className="hero-img hero-img-small"
          />
          {/* จุดที่ 3: แทนที่วงกลมด้านบนขวา */}
          <img
            src="/assets/EV_ICON.png"
            alt="สถานีชาร์จ EV"
            className="hero-img hero-img-circle"
          />
        </div>
      </div>
    </section>
  );
}
