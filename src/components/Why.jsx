import DashboardShowcase from "./DashboardShowcase";
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
        </div>   {/* ← ปิด wrap why-inner */}
          <DashboardShowcase />
    </section>
  );
}
