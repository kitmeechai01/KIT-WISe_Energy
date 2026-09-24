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
          {/* วงกลมพื้นหลังตกแต่ง — คงของเดิมไว้ */}
          <svg className="hero-art-bg" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" fill="#EEF1FF" />
            <circle cx="200" cy="200" r="150" stroke="#000863" strokeOpacity="0.12" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="110" stroke="#000863" strokeOpacity="0.16" strokeWidth="1.5" />
            <g stroke="#000863" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round">
              <path d="M60 200h30M310 200h30M200 60v30M200 320v20" />
            </g>
          </svg>

          {/* จุดที่ 1: แทนที่สี่เหลี่ยมใหญ่ตรงกลาง */}
          <img
            src="/src/assets/KW-3PICON.png"
            alt="โซลูชันพลังงานหลักของ KIT-WISe"
            className="hero-img hero-img-main"
          />
          {/* จุดที่ 2: แทนที่สี่เหลี่ยมเล็กด้านล่างซ้าย */}
          <img
            src="src/assets/LINE_CHIP.png"
            alt="แผงควบคุมการใช้พลังงาน"
            className="hero-img hero-img-small"
          />
          {/* จุดที่ 3: แทนที่วงกลมด้านบนขวา */}
          <img
            src="/src/assets/EV_ICON.png"
            alt="สถานีชาร์จ EV"
            className="hero-img hero-img-circle"
          />
        </div>
      </div>
    </section>
  );
}
