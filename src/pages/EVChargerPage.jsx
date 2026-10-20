// export default function HotelPage() {
//   return (
//     <section className="proposal-page">
//       <div className="wrap">
//         <div className="eyebrow">EV CHARGER PROPOSAL</div>
//         <h1>ข้อเสนอติดตั้ง EV Charger</h1>
//         <p className="lede" style={{ marginTop: 18 }}>เนื้อหากำลังจัดทำ</p>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import Contact from "../components/Contact";

function Icon({ name }) {
  const p = {
    width: 26, height: 26, viewBox: "0 0 24 24", fill: "none",
    stroke: "#F2F2F7", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "bolt":
      return <svg {...p}><path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" /></svg>;
    case "shield":
      return <svg {...p}><path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5Z" /><path d="M9 12l2 2 4-4" /></svg>;
    case "billing":
      return <svg {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h3" /></svg>;
    case "phone":
      return <svg {...p}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>;
    case "plug":
      return <svg {...p}><path d="M8 3v6M16 3v6M6 9h12v4a6 6 0 0 1-12 0V9Z" /><path d="M12 19v3" /></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    default:
      return null;
  }
}

const FEATURES = [
  { icon: "bolt", title: "ชาร์จพร้อมกันหลายคัน", desc: "ศูนย์ควบคุมกลางเชื่อมทุกจุดชาร์จเข้าด้วยกัน รองรับการชาร์จพร้อมกันหลายช่องจอด" },
  { icon: "shield", title: "ปลอดภัยสูง", desc: "ตรวจจับกระแสไฟผิดปกติและไฟรั่ว ป้องกันไฟไหม้จากสายไฟและขั้วต่อ ตัดวงจรได้ภายใน 0.02 วินาที" },
  { icon: "billing", title: "ระบบเรียกเก็บเงิน", desc: "คิดค่าชาร์จและค่าที่จอดได้ พร้อมรายงานการใช้งานแบบ Real-time" },
  { icon: "phone", title: "แอปมือถือ", desc: "ผู้ใช้ควบคุมและดูประวัติการชาร์จผ่านแอป ยืนยันตัวตนได้ด้วยบัตร QR Code หรือแอป" },
  { icon: "plug", title: "ไม่ต้องใช้ Wall-box ขนาดใหญ่", desc: "แบบชาร์จประจำช่องจอดใช้ชุดยืนยันตัวตนขนาดเล็กแทน ไม่ต้องติดกล่องชาร์จใหญ่ใกล้ตัวรถ" },
  { icon: "clock", title: "ดูแลออนไลน์ 24 ชั่วโมง", desc: "ทีมงานเฝ้าระวังระบบตลอด 24 ชั่วโมง พร้อมบริการหลังการติดตั้ง" },
];

const MODELS = [
  {
    key: "shared",
    tag: "SHARED CHARGING",
    title: "จุดชาร์จส่วนกลาง",
    desc: "วางจุดชาร์จไว้ที่ช่องจอดส่วนกลาง ใช้ร่วมกันและให้บริการบุคคลภายนอกได้ ชาร์จสูงสุด 22kW (ตัวอย่างการออกแบบ: 2 ช่องจอดพร้อมกัน)",
    bestFor: "คอนโด โรงแรม และอาคารที่ต้องการให้บริการแขกหรือบุคคลภายนอก",
    // points: [
    //   "ติดตั้งเพียงไม่กี่จุด เริ่มต้นได้ง่าย",
    //   "มีระบบเรียกเก็บเงินและแอปสำหรับเจ้าของรถ",
    //   "เหมาะกับการบริการส่วนกลาง ไม่ใช่การชาร์จประจำที่จอดของแต่ละห้อง",
    // ],
    points: [
  "ลงโครงสร้างพื้นฐานล่วงหน้า 100% หรือ 50% ตามงบประมาณ แล้วเพิ่มจุดชาร์จเมื่อผู้อยู่อาศัยต้องการ",
  "แบบ 100% ค่าติดตั้งจุดชาร์จเท่ากันทุกที่จอด ส่วนแบบ 50% ค่าติดตั้งจะขึ้นกับระยะสายถึงที่จอด",
  "ไม่ต้องใช้ Wall-box ติดหน้าที่จอด",
  "ยืนยันตัวตนได้หลายวิธี และดูการใช้งานแบบ Real-time",
],
  },
  {
    key: "private",
    tag: "PRIVATE CHARGING",
    title: "ชาร์จส่วนตัวประจำช่องจอด",
    desc: "ติดตั้งศูนย์ควบคุม KIT-WISe ประจำแต่ละชั้น เชื่อมกับศูนย์กลาง ผู้อยู่อาศัยแต่ละรายมีจุดชาร์จประจำที่จอดของตัวเอง 7kW (ตัวอย่างการออกแบบ: ชาร์จพร้อมกัน 15–20 คัน)",
    bestFor: "คอนโดและหมู่บ้านที่ผู้อยู่อาศัยหลายรายต้องการชาร์จที่จอดของตัวเอง",
    points: [
      "ลงโครงสร้างพื้นฐานล่วงหน้า แล้วให้ผู้อยู่อาศัยสมัครติดตั้งจุดชาร์จเพิ่มภายหลัง",
      "ค่าติดตั้งจุดชาร์จเท่ากันทุกตำแหน่งที่จอด",
      "ไม่ต้องใช้ Wall-box ติดหน้าที่จอด",
      "ยืนยันตัวตนได้หลายวิธี และดูการใช้งานแบบ Real-time",
    ],
  },
  {
    key: "hub",
    tag: "PUBLIC CHARGING HUB",
    title: "สถานีชาร์จบริการลูกค้า",
    desc: "ศูนย์ควบคุม KIT-WISe Hub ต่อหัวชาร์จได้หลายหัว (ตัวอย่างการออกแบบ: 5 หัว) กำลังรวม 22kW พร้อมระบบหลังบ้านคิดค่าชาร์จและค่าที่จอด",
    bestFor: "โรงแรม รีสอร์ท ห้างสรรพสินค้า และพื้นที่เชิงพาณิชย์",
    points: [
      "งบประมาณไม่สูง แต่ใช้กำลังไฟได้เต็มความจุ",
      "ระบบหลังบ้าน (Backoffice) คิดทั้งค่าชาร์จและค่าที่จอด",
      "เสียบชาร์จได้หลายคันพร้อมกัน",
    ],
  },
];

const PRODUCTS = [
  { name: "THE KIT-WISe Station", power: "7 / 22 kW", image: null, auth: "บัตร / QR Code / แอป", features: ["จอแสดงสถานะ", "Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "THE KIT-WISe Mini Station", power: "7 / 22 kW", image: null, auth: "บัตร / QR Code / แอป", features: ["จอแสดงสถานะ", "Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "THE KIT-WISe AIR", power: "7 / 22 kW", image: null, auth: "QR Code / แอป", features: ["Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "THE KIT-WISe Outlet", power: "3.7 kW", image: null, auth: "QR Code / แอป", features: ["Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 16A)" },
  { name: "THE KIT-WISe AIR EV+", power: "7 / 22 kW", image: null, auth: "QR Code / แอป", features: ["Metering + Billing", "บริหารหลายหัวชาร์จ"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "THE KIT-WISe EV Hub", power: "ศูนย์รวมหัวชาร์จ", image: null, auth: null, features: ["บริหารหลายหัวชาร์จจากศูนย์กลาง"], fit: "ใช้งานร่วมกับ KIT-WISe 3Ph 4P" },
];

const STEPS = [
  { title: "สำรวจหน้างาน", desc: "ตรวจสอบระบบไฟฟ้าและพื้นที่จอดรถ เพื่อประเมินกำลังไฟที่รองรับได้" },
  { title: "ออกแบบและวางแผน", desc: "กำหนดรูปแบบการติดตั้ง จำนวนจุดชาร์จ และตรวจสอบอนุมัติแบบ" },
  { title: "ติดตั้ง", desc: "เดินสาย ติดตั้งศูนย์ควบคุมและหัวชาร์จ พร้อมระบบสื่อสาร" },
  { title: "ทดสอบและส่งมอบ", desc: "ตรวจสอบระบบ ฝึกอบรมผู้ใช้งาน ส่งมอบคู่มือและแบบไฟฟ้า" },
  { title: "ดูแลหลังการขาย", desc: "เฝ้าระวังระบบออนไลน์ 24 ชั่วโมง พร้อมทีมงานดูแลหน้างาน" },
];

const COST_FACTORS = [
  { title: "จำนวนจุดชาร์จและกำลังไฟ", desc: "7kW หรือ 22kW และจำนวนช่องจอดที่ต้องการชาร์จพร้อมกัน" },
  { title: "ระยะทางเดินสาย", desc: "ระยะจากตู้ไฟหลัก (MDB) ถึงจุดชาร์จ ค่าเดินสายและรางสายมักเป็นสัดส่วนหลักของงบ" },
  { title: "สภาพหน้างาน", desc: "เส้นทางร้อยท่อ เดินลอยหรือฝังพื้น และงานก่อสร้างที่จำเป็น" },
  { title: "ระบบไฟฟ้าเดิม", desc: "ตู้ MDB และเบรกเกอร์ที่ต้องปรับปรุงเพื่อรองรับโหลดเพิ่ม" },
  { title: "ระบบบริหารและเรียกเก็บเงิน", desc: "ระบบหลังบ้านสำหรับคิดค่าชาร์จและค่าที่จอด (ถ้าต้องการ)" },
];

const LOAD_POINTS = [
  { title: "Load-sharing", desc: "จัดสรรกำลังไฟให้จุดชาร์จที่ใช้งานอยู่ตามความจำเป็น ติดตั้งจุดชาร์จเพิ่มได้โดยไม่ต้องขยายกำลังไฟของระบบไฟฟ้าเดิม" },
  { title: "พร้อมรองรับทุกที่จอด", desc: "ลงโครงสร้างพื้นฐานล่วงหน้า แล้วเพิ่มจุดชาร์จเมื่อมีผู้ต้องการเท่านั้น ไม่ต้องลงทุนติดตั้งเต็มจำนวนตั้งแต่วันแรก" },
  { title: "เป็นธรรมกับทุกคน", desc: "ผู้อยู่อาศัยที่มีและไม่มีรถ EV ได้รับประโยชน์จากมูลค่าโครงการที่เพิ่มขึ้น นิติบุคคลคืนทุนจากค่าติดตั้งจุดชาร์จและค่าบริหารระบบ" },
  { title: "เชื่อมเครือข่ายทุกจุด", desc: "ดูการใช้งานและรายงานแบบ Real-time ผ่านแอป ยืนยันตัวตนผู้ใช้ได้หลายวิธี" },
];

const BILLING = [
  {
    tag: "STANDARD",
    title: "ชาร์จเมื่อมีกำลังไฟว่าง",
    desc: "รถจะได้ชาร์จเมื่อมีกำลังไฟเหลือ ตามลำดับมาก่อนได้ก่อน เหมาะกับผู้ที่ไม่เร่งใช้รถ",
  },
  {
    tag: "PRIORITY",
    title: "ชาร์จได้ทันทีที่เสียบ",
    desc: "ราคาต่อหน่วยสูงกว่าแบบ Standard แต่ชาร์จได้ทันทีที่เสียบ ตราบที่กำลังไฟรวม ณ เวลานั้นยังไม่เกินลิมิต หากเกินจะมีค่าใช้จ่ายส่วนเกินเพิ่มจากราคาต่อหน่วย",
  },
  {
    tag: "PREMIUM",
    title: "ค่าส่วนเกินกรณีดึงไฟเกินพีค",
    desc: "ค่าใช้จ่ายเพิ่มจากราคาต่อหน่วย เรียกเก็บจากผู้ที่ทำให้กำลังไฟรวมเกินลิมิต ช่วยให้ทุกคนใช้ระบบร่วมกันได้อย่างเป็นธรรม",
  },
];


export default function EVChargerPage() {
  const goContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <section className="ev-hero">
        <div className="wrap">
          <div className="eyebrow">EV CHARGER SOLUTIONS</div>
          <h1>ระบบชาร์จ EV<br />สำหรับคอนโด บ้าน โรงแรม และอาคาร</h1>
          <p className="lede">
            บริการสำรวจ ออกแบบ ติดตั้งสถานีชาร์จ EV ครบวงจร พร้อมระบบบริหารจัดการและเรียกเก็บเงิน
            เลือกรูปแบบที่เหมาะกับพื้นที่ของคุณ
          </p>
          <div className="hero-actions">
            <button className="btn btn-solid" onClick={goContact}>ขอใบเสนอราคา</button>
            <Link to="/" state={{ scrollTo: "projects" }} className="btn btn-outline">ดูผลงานติดตั้งจริง</Link>
          </div>
        </div>
      </section>

      <section className="ev-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHY KIT-WISe EV</div>
              <h2>ออกแบบมาเพื่อ<br />การชาร์จหลายคัน</h2>
            </div>
            <p  className="lede"><br />ไม่ใช่แค่หัวชาร์จ แต่เป็นระบบที่ดูแลตั้งแต่ความปลอดภัย การเรียกเก็บเงิน ไปจนถึงการเฝ้าระวังหลังติดตั้ง</p>
          </div>
          <div className="ev-grid-3">
            {FEATURES.map((f) => (
              <div className="ev-feature" key={f.title}>
                <div className="ev-icon"><Icon name={f.icon} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">INSTALLATION MODELS</div>
              <h2>รูปแบบการติดตั้ง<br />เลือกให้เหมาะกับพื้นที่</h2>
            </div>
            <p className="lede">แต่ละรูปแบบมีข้อดีและขอบเขตงานต่างกัน ปรับขนาดและจำนวนจุดชาร์จได้ตามหน้างาน</p>
          </div>
          <div className="ev-models-grid">
            {MODELS.map((m) => (
              <div className="ev-model" key={m.key}>
                <span className="tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="ev-best"><strong>เหมาะกับ:</strong> {m.bestFor}</div>
                <ul>
                  {m.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ev-section">
  <div className="wrap">
    <div className="section-head">
      <div>
        <div className="eyebrow">SMART LOAD SHARING</div>
        <h2>เพิ่มจุดชาร์จได้<br />ด้วยกำลังไฟเท่าเดิม</h2>
      </div>
      <p className="lede">เหมาะกับคอนโดและโครงการที่อยู่อาศัยรวมที่ผู้อยู่อาศัยจะทยอยใช้รถ EV ไม่พร้อมกันทั้งหมด</p>
    </div>
    <ul className="ev-cost-list">
      {LOAD_POINTS.map((c) => (
        <li key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </li>
      ))}
    </ul>
  </div>
</section>

      <section className="ev-section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">BILLING SCHEMES</div>
              <h2>รูปแบบการเรียกเก็บ<br />ค่าชาร์จที่ยืดหยุ่น</h2>
            </div>
            <p className="lede">ผู้อยู่อาศัยแต่ละคนมีความต้องการต่างกัน จึงมีรูปแบบการเรียกเก็บให้เลือก และกำไรจากค่าชาร์จช่วยให้นิติบุคคลคืนทุนโครงสร้างพื้นฐานและใช้ดูแลระบบในอนาคต</p>
          </div>
          <div className="ev-grid-3">
            {BILLING.map((b) => (
              <div className="ev-feature" key={b.tag}>
                <span className="ev-billing-tag">{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">CHARGER LINEUP</div>
              <h2>รุ่นหัวชาร์จ<br />ให้เลือกตามการใช้งาน</h2>
            </div>
            <p className="lede">ตั้งแต่เต้ารับ 3.7kW ไปจนถึงสถานีชาร์จ 22kW และศูนย์รวมสำหรับบริหารหลายหัวชาร์จ</p>
          </div>
          <div className="ev-grid-3">
            {PRODUCTS.map((p) => (
              <div className="ev-product" key={p.name}>
                {p.image && <img src={p.image} alt={p.name} className="ev-product-img" />}
                <span className="ev-power">{p.power}</span>
                <h3>{p.name}</h3>
                <dl>
                  {p.auth && <div><dt>การยืนยันตัวตน</dt><dd>{p.auth}</dd></div>}
                  <div><dt>ฟังก์ชัน</dt><dd>{p.features.join(" · ")}</dd></div>
                  <div><dt>เหมาะกับ</dt><dd>{p.fit}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">HOW WE WORK</div>
              <h2>จากการสำรวจ<br />ถึงเริ่มใช้งานจริง</h2>
            </div>
            <p className="lede">ระยะเวลาโดยประมาณ 45–90 วัน ขึ้นกับขนาดและความซับซ้อนของโครงการ</p>
          </div>
          <div className="steps ev-steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">INVESTMENT</div>
              <h2>ราคาขึ้นกับอะไรบ้าง</h2>
            </div>
            <p className="lede">ราคาของแต่ละโครงการไม่เท่ากัน เพราะขึ้นกับสภาพหน้างานเป็นหลัก ทีมงานจะสำรวจและเสนอราคาให้ตามความเหมาะสม</p>
          </div>
          <ul className="ev-cost-list">
            {COST_FACTORS.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}