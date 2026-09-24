export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">OUR SOLUTIONS</div>
            <h2>เทคโนโลยีที่เราออกแบบ<br />ให้ทำงานร่วมกัน</h2>
            <p className="lede">
            จากการผลิตพลังงาน ไปจนถึงการจัดการและการใช้งาน เรารวบรวมโซลูชันไว้ในระบบเดียว
            เพื่อให้ธุรกิจมองเห็นและบริหารพลังงานได้ง่ายขึ้น
          </p>
          </div>
        </div>
        <div className="card-grid">
          <div className="sol-card">
            <div className="sol-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="12" rx="2" stroke="#F2F2F7" strokeWidth="1.6" />
                <path d="M8 20h8M12 16v4" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M7 12l2.5-3L12 11l2-2.5L17 10" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="tag">ENERGY MANAGEMENT</span>
            <h3>KIT-WISeCENTER</h3>
            <p>ระบบบริหารจัดการพลังงานและ Dashboard สำหรับติดตามข้อมูลการใช้ไฟแบบ Real-time</p>
          </div>
          <div className="sol-card">
            <div className="sol-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" stroke="#F2F2F7" strokeWidth="1.6" />
                <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="tag">SOLAR AS A SERVICE</span>
            <h3>Solar Energy</h3>
            <p>โซลูชันพลังงานแสงอาทิตย์สำหรับธุรกิจ พร้อมระบบติดตามประสิทธิภาพการผลิต</p>
          </div>
          <div className="sol-card">
            <div className="sol-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" stroke="#F2F2F7" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="tag">EV CHARGING</span>
            <h3>EV AIR+</h3>
            <p>โซลูชันสถานีชาร์จ EV สำหรับองค์กร อาคารสำนักงาน และพื้นที่เชิงพาณิชย์</p>
          </div>
          <div className="sol-card">
            <div className="sol-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="7" height="12" rx="1.5" stroke="#F2F2F7" strokeWidth="1.6" />
                <rect x="14" y="4" width="7" height="15" rx="1.5" stroke="#F2F2F7" strokeWidth="1.6" />
              </svg>
            </div>
            <span className="tag">MULTI CHARGING</span>
            <h3>EV AIR+ ULTRA</h3>
            <p>รองรับ 1–6 หัวชาร์จ เหมาะสำหรับร้านอาหาร คาเฟ่ และพื้นที่ที่ต้องการรองรับลูกค้า EV</p>
          </div>
        </div>
      </div>
    </section>
  );
}
