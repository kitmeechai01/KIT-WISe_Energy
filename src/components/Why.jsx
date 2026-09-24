export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap why-inner">
        <div>
          <div className="eyebrow">WHY KIT-WISe</div>
          <h2>มากกว่า "การติดตั้ง"<br />คือการมองเห็นพลังงาน</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            เปลี่ยนข้อมูลพลังงานให้กลายเป็นข้อมูลที่นำไปใช้ตัดสินใจได้ ตั้งแต่ Monitor → Analyze → Optimize → Control
          </p>
          <div className="steps">
            <div className="step"><div className="step-num">01</div><div><h3>Monitor</h3><p>เห็นการใช้พลังงานแบบ Real-time จาก Dashboard</p></div></div>
            <div className="step"><div className="step-num">02</div><div><h3>Analyze</h3><p>วิเคราะห์รูปแบบการใช้ไฟและจุดที่มีความผิดปกติ</p></div></div>
            <div className="step"><div className="step-num">03</div><div><h3>Optimize</h3><p>นำข้อมูลไปวางแผนลดต้นทุนและเพิ่มประสิทธิภาพ</p></div></div>
            <div className="step"><div className="step-num">04</div><div><h3>Control</h3><p>จัดการและติดตามระบบได้จากศูนย์กลาง</p></div></div>
          </div>
        </div>
        <div className="why-art">
          <svg viewBox="0 0 460 360" fill="none">
            <rect width="460" height="360" rx="18" fill="#000863" />
            <rect x="24" y="24" width="180" height="70" rx="12" fill="#0C1573" />
            <text x="40" y="55" fill="#F2F2F7" fontFamily="Inter" fontSize="13" fontWeight="700">TODAY'S USAGE</text>
            <text x="40" y="80" fill="#F2F2F7" fontFamily="Inter" fontSize="22" fontWeight="700">482 kWh</text>
            <rect x="216" y="24" width="220" height="70" rx="12" fill="#0C1573" />
            <text x="232" y="55" fill="#F2F2F7" fontFamily="Inter" fontSize="13" fontWeight="700">SAVINGS THIS MONTH</text>
            <text x="232" y="80" fill="#5EEAD4" fontFamily="Inter" fontSize="22" fontWeight="700">-18.4%</text>
            <g stroke="#F2F2F7" strokeOpacity="0.85" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="24,240 80,210 130,255 180,190 230,220 280,150 330,180 380,120 436,150" />
            </g>
            <g fill="#F2F2F7" fillOpacity="0.9">
              <circle cx="230" cy="220" r="4" /><circle cx="330" cy="180" r="4" /><circle cx="436" cy="150" r="5" />
            </g>
            <g fillOpacity="0.5" fill="#5EEAD4">
              <rect x="24" y="300" width="40" height="28" rx="4" />
              <rect x="76" y="284" width="40" height="44" rx="4" />
              <rect x="128" y="270" width="40" height="58" rx="4" />
              <rect x="180" y="292" width="40" height="36" rx="4" />
              <rect x="232" y="260" width="40" height="68" rx="4" />
              <rect x="284" y="278" width="40" height="50" rx="4" />
              <rect x="336" y="248" width="40" height="80" rx="4" />
              <rect x="388" y="266" width="40" height="62" rx="4" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
