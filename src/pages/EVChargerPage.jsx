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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const flipProps = {
  role: "button",
  tabIndex: 0,
  "aria-label": "สลับระหว่างข้อความและรูป",
  onClick: (e) => e.currentTarget.classList.toggle("is-flipped"),
  onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.classList.toggle("is-flipped");
    }
  },
};

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
    case "building":
      return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 7h2M14 7h2M9 11h2M14 11h2M9 15h2M14 15h2M10 21v-3h4v3" /></svg>;
    case "car":
      return <svg {...p}><path d="m5 11 2-5h10l2 5" /><path d="M3 11h18v7H3zM6 18v2M18 18v2M6 14h2M16 14h2" /></svg>;
    case "network":
      return <svg {...p}><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m10.8 7.2-4.5 8.5M13.2 7.2l4.5 8.5M7.5 18h9" /></svg>;
    case "wallet":
      return <svg {...p}><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 9h18M16 14h.01M6 5V3h12v2" /></svg>;
    case "map":
      return <svg {...p}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15M15 6v15" /></svg>;
    case "chart":
      return <svg {...p}><path d="M3 3v18h18M7 15l4-4 3 2 6-7" /><path d="M16 6h4v4" /></svg>;
    case "users":
      return <svg {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></svg>;
    case "cable":
      return <svg {...p}><path d="M8 3v5M16 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4M9 21h6" /></svg>;
    case "parking":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><path d="M9.5 17V7.5h3.6a3.2 3.2 0 0 1 0 6.4H9.5" /></svg>;
    case "home":
      return <svg {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /><path d="M12.8 11 9.6 15.2h2.4l-.8 3.8 3.4-4.6h-2.4l.6-3.4Z" fill="#F2F2F7" /></svg>;
    case "connector":
      return <svg {...p}><rect x="6.5" y="2.8" width="11" height="9.6" rx="3.6" /><path d="M12.8 5.2 10.4 8.4h1.9l-.7 2.1 2.7-3.3h-1.9l.4-2Z" fill="#F2F2F7" /><path d="M12 12.4v2.2c0 3.2-2.3 5-5.6 5H4.5" /></svg>;
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
    icon: "users", // <--- ชื่อไอคอนสำหรับ Shared (ปรับเปลี่ยนตามไลบรารีไอคอนของคุณได้ เช่น "users", "share", "grid")
    desc: "วางจุดชาร์จไว้ที่ช่องจอดส่วนกลาง ใช้ร่วมกันและให้บริการบุคคลภายนอกได้ ชาร์จสูงสุด 22kW (ตัวอย่างการออกแบบ: 2 ช่องจอดพร้อมกัน)",
    bestFor: "คอนโด โรงแรม และอาคารที่ต้องการให้บริการแขกหรือบุคคลภายนอก",
    bgImage: "/assets/ev-model-shared.jpg",
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
    icon: "car", // <--- ชื่อไอคอนสำหรับ Private (เช่น "home", "shield", "user")
    desc: "ติดตั้งศูนย์ควบคุม KIT-WISe ประจำแต่ละชั้น เชื่อมกับศูนย์กลาง ผู้อยู่อาศัยแต่ละรายมีจุดชาร์จประจำที่จอดของตัวเอง 7kW (ตัวอย่างการออกแบบ:ชาร์จพร้อมกัน 15–20 คัน)",
    bestFor: "คอนโดและหมู่บ้านที่ผู้อยู่อาศัยหลายรายต้องการชาร์จที่จอดของตัวเอง",
    bgImage: "/assets/ev-model-private.jpg",
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
    icon: "bolt", // <--- ชื่อไอคอนสำหรับ Hub (เช่น "zap", "battery-charging", "compass", "globe")
    desc: "ศูนย์ควบคุม KIT-WISe Hub ต่อหัวชาร์จได้หลายหัว (ตัวอย่างการออกแบบ: 5 หัว) กำลังรวม 22kW พร้อมระบบหลังบ้านคิดค่าชาร์จและค่าที่จอด",
    bestFor: "โรงแรม รีสอร์ท ห้างสรรพสินค้า และพื้นที่เชิงพาณิชย์",
    bgImage: "/assets/ev-model-hub.jpg",
    points: [
      "งบประมาณไม่สูง แต่ใช้กำลังไฟได้เต็มความจุ",
      "ระบบหลังบ้าน (Backoffice) คิดทั้งค่าชาร์จและค่าที่จอด",
      "เสียบชาร์จได้หลายคันพร้อมกัน",
    ],
  },
];

const PRODUCTS = [
  { name: "KIT-WISe Full Station", power: "7 / 22 kW", image: null,hoverImage: "/assets/LINE_ALBUM_โครงการมิลเลนเนียม_260826_1.jpg", auth: "บัตร / QR Code / แอป", features: ["จอแสดงสถานะ", "Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "KIT-WISe Mini Station", power: "7 / 22 kW", image: null,hoverImage: "/assets/KW-MINI.jpg", auth: "บัตร / QR Code / แอป", features: ["จอแสดงสถานะ", "Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "KIT-WISe EV AIR", power: "7 / 22 kW", image: null,hoverImage: "/assets/LINE_ALBUM_พรอสเพอร์_260826_2.jpg", auth: "QR Code / แอป", features: ["Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "KIT-WISe Outlet", power: "3.7 kW", image: null,hoverImage: "/assets/LINE_ALBUM_ROYCE_260826_1.jpg", auth: "QR Code / แอป", features: ["Metering"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 16A)" },
  { name: "KIT-WISe EV AIR+", power: "7 / 22 kW", image: null,hoverImage: "/assets/LINE_ALBUM_Doctor Charger_260826_1.jpg", auth: "QR Code / แอป", features: ["Metering + Billing", "บริหารหลายหัวชาร์จ"], fit: "บ้านพักอาศัย สำนักงาน เชิงพาณิชย์ (กระแส ≤ 40A)" },
  { name: "KIT-WISe EV AIR+ ULTRA", power: "ศูนย์รวมหัวชาร์จ", image: null,hoverImage: "/assets/328490_0.jpg", auth: null, features: ["บริหารหลายหัวชาร์จจากศูนย์กลาง"], fit: "ใช้งานร่วมกับ KIT-WISe 3Ph 4P" },
];

const STEPS = [
  { title: "สำรวจหน้างาน", desc: "ตรวจสอบระบบไฟฟ้าและพื้นที่จอดรถ เพื่อประเมินกำลังไฟที่รองรับได้" },
  { title: "ออกแบบและวางแผน", desc: "กำหนดรูปแบบการติดตั้ง จำนวนจุดชาร์จ และตรวจสอบอนุมัติแบบ" },
  { title: "ติดตั้ง", desc: "เดินสาย ติดตั้งศูนย์ควบคุมและหัวชาร์จ พร้อมระบบสื่อสาร" },
  { title: "ทดสอบและส่งมอบ", desc: "ตรวจสอบระบบ ฝึกอบรมผู้ใช้งาน ส่งมอบคู่มือและแบบไฟฟ้า" },
  { title: "ดูแลหลังการขาย", desc: "เฝ้าระวังระบบออนไลน์ 24 ชั่วโมง พร้อมทีมงานดูแลหน้างาน" },
];

const COST_FACTORS = [
  { title: "จำนวนจุดชาร์จและกำลังไฟ", icon: "plug", desc: "7kW หรือ 22kW และจำนวนช่องจอดที่ต้องการชาร์จพร้อมกัน", image: "/assets/ev-six-point-hub.jpg" },
  { title: "ระยะทางเดินสาย", icon: "cable", desc: "ระยะจากตู้ไฟหลัก (MDB) ถึงจุดชาร์จ ค่าเดินสายและรางสายมักเป็นสัดส่วนหลักของงบ", image: "/assets/LINE_ALBUM_ช่างไฟฟ้า แสนดี_260826_1.jpg" },
  { title: "สภาพหน้างาน", icon: "building", desc: "เส้นทางร้อยท่อ เดินลอยหรือฝังพื้น และงานก่อสร้างที่จำเป็น", image: "/assets/LINE_ALBUM_พรอสเพอร์_260826_1.jpg" },
  { title: "ระบบไฟฟ้าเดิม", icon: "bolt", desc: "ตู้ MDB และเบรกเกอร์ที่ต้องปรับปรุงเพื่อรองรับโหลดเพิ่ม", image: "/assets/LINE_ALBUM_ESARA @CDC_260826_3.jpg" },
  { title: "ระบบบริหารและเรียกเก็บเงิน", icon: "billing", desc: "ระบบหลังบ้านสำหรับคิดค่าชาร์จและค่าที่จอด (ถ้าต้องการ)", image: "/assets/webev.jpeg" },
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


function InfoGraphic({ i }) {
  const C = "#cfd9ff", A = "#4f6bff", Y = "#ffd24a", S = "rgba(255,255,255,.09)";
  const t = (x, y, txt, sz = 11, fill = "#fff", w = 700) => (
    <text x={x} y={y} textAnchor="middle" fontSize={sz} fontWeight={w} fill={fill} stroke="none">{txt}</text>
  );
  const line = { fill: "none", stroke: C, strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  let body = null;
  if (i === 0) body = (<>
    {t(100, 26, "กำลังไฟ × จำนวนจุด")}
    <path d="M24 186h152" {...line} />
    <rect className="ig-bar" x="42" y="136" width="44" height="50" rx="6" fill={A} />
    <rect className="ig-bar d2" x="114" y="76" width="44" height="110" rx="6" fill={Y} />
    {t(64, 128, "7 kW", 13)}{t(136, 68, "22 kW", 13, Y)}
    <path className="ig-pulse" d="M58 150l-4 8h6l-4 9" {...line} stroke="#fff" />
    <path className="ig-pulse d2" d="M130 100l-5 10h7l-5 12M144 100l-5 10h7l-5 12" {...line} stroke="#050b38" />
    {t(100, 210, "ชาร์จพร้อมกันได้กี่ช่อง", 10, C, 500)}
  </>);
  if (i === 1) body = (<>
    {t(100, 26, "ระยะทางเดินสาย")}
    <rect x="10" y="84" width="42" height="64" rx="6" fill={S} {...line} />
    <path className="ig-pulse" d="M34 96l-6 12h8l-6 14" {...line} stroke={Y} />
    <path d="M28 134h12" {...line} />
    <rect x="148" y="80" width="40" height="72" rx="8" fill={S} {...line} />
    <rect x="156" y="90" width="24" height="16" rx="3" {...line} />
    <path className="ig-flow" d="M52 116h30l12-20 20 40 12-20h22" {...line} stroke={Y} strokeDasharray="5 5" />
    {t(31, 168, "MDB", 10, C, 600)}{t(168, 172, "EV", 10, C, 600)}
    <path className="ig-pulse d2" d="M12 192h176M12 186v12M188 186v12M70 188v8M100 188v8M130 188v8" {...line} stroke={A} strokeWidth="1.8" />
    {t(100, 216, "ยิ่งไกล ยิ่งใช้สายมาก", 10, C, 500)}
  </>);
  if (i === 2) body = (<>
    {t(100, 26, "สภาพหน้างาน")}
    <rect x="8" y="128" width="184" height="22" fill={S} {...line} />
    <path className="ig-flow" d="M22 139h66" {...line} stroke={Y} strokeWidth="3.4" strokeDasharray="6 6" />
    <circle cx="22" cy="139" r="4" fill={Y} stroke="none" /><circle cx="88" cy="139" r="4" fill={Y} stroke="none" />
    <path d="M55 128V92" {...line} strokeDasharray="3 4" strokeWidth="1.6" />
    <rect x="124" y="56" width="14" height="72" fill={S} {...line} />
    <path className="ig-flow up" d="M150 128V76" {...line} stroke={Y} strokeWidth="3.4" strokeDasharray="6 6" />
    <path d="M138 90h12M138 112h12" {...line} />
    <rect className="ig-pulse" x="143" y="58" width="16" height="14" rx="3" fill={Y} stroke="none" />
    <path d="M104 50v140" {...line} strokeDasharray="2 5" strokeWidth="1.4" />
    {t(55, 172, "ฝังพื้น", 11)}{t(150, 172, "เดินลอย", 11)}
    {t(100, 206, "เส้นทางร้อยท่อ · งานก่อสร้าง", 10, C, 500)}
  </>);
  if (i === 3) body = (<>
    {t(100, 26, "ตู้ MDB / เบรกเกอร์")}
    <rect x="28" y="44" width="144" height="140" rx="10" fill={S} {...line} />
    <rect x="42" y="58" width="116" height="12" rx="6" fill="rgba(255,255,255,.15)" />
    <rect className="ig-load" x="42" y="58" width="116" height="12" rx="6" fill={Y} />
    {[0, 1, 2].map((c) => [0, 1].map((r) => (
      <g key={c + "" + r}>
        <rect x={44 + c * 38} y={88 + r * 48} width="28" height="38" rx="4" {...line} />
        <rect className={"ig-tog t" + ((c + r) % 3)} x={51 + c * 38} y={94 + r * 48} width="14" height="14" rx="2" fill={c === 2 && r === 0 ? Y : A} stroke="none" />
      </g>
    )))}
    <g className="ig-pop"><circle cx="168" cy="48" r="16" fill={Y} />
    <path d="M168 40v16M160 48h16" stroke="#050b38" strokeWidth="3.4" strokeLinecap="round" /></g>
    {t(100, 210, "อัปเกรดรองรับโหลดเพิ่ม", 10, C, 500)}
  </>);
  if (i === 4) body = (<>
    {t(100, 26, "ระบบบริหารและบิล")}
    <rect x="52" y="40" width="84" height="150" rx="14" fill={S} {...line} />
    <path d="M84 48h20" {...line} />
    <path d="M64 142h60" {...line} strokeWidth="1.6" />
    <path d="M64 66h40M64 82h56" {...line} stroke={A} strokeWidth="3" />
    <rect className="ig-bar" x="64" y="104" width="10" height="26" rx="2" fill={A} />
    <rect className="ig-bar d2" x="80" y="94" width="10" height="36" rx="2" fill={A} />
    <rect className="ig-bar d3" x="96" y="110" width="10" height="20" rx="2" fill={A} />
    <rect className="ig-bar d4" x="112" y="86" width="10" height="44" rx="2" fill={Y} />
    {t(94, 168, "kWh", 11, C, 600)}
    <g className="ig-coin"><circle cx="150" cy="150" r="26" fill={Y} />
    {t(150, 160, "฿", 28, "#050b38", 800)}</g>
    {t(100, 214, "คิดค่าชาร์จ · ค่าที่จอด", 10, C, 500)}
  </>);
  return (
    <svg className="ev-info" viewBox="0 0 200 230" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">
      <defs><linearGradient id={"ev-ig" + i} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1a2bb0" /><stop offset="1" stopColor="#050b38" /></linearGradient></defs>
      <rect x="-300" y="-300" width="800" height="800" fill={"url(#ev-ig" + i + ")"} />
      {body}
    </svg>
  );
}

function StepGraphic({ i }) {
  const p = { viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (i === 0) return (<svg {...p}><defs><mask id="ev-cut0" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><rect width="64" height="64" fill="#fff" stroke="none" /><circle cx="40" cy="40" r="14" fill="#000" stroke="none" /><path d="M47 47l9 9" stroke="#000" strokeWidth="9" /></mask></defs><g mask="url(#ev-cut0)"><rect x="8" y="8" width="30" height="40" rx="3" /><path d="M14 18h8M14 26h8M14 34h8" /><path d="M28 16l-4 7h5l-3 7" /></g><circle cx="40" cy="40" r="10" /><path d="M47 47l9 9" /></svg>);
  if (i === 1) return (<svg {...p}><defs><mask id="ev-cut1" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><rect width="64" height="64" fill="#fff" stroke="none" /><path d="M40 56l16-16 4 4-16 16-6 2z" fill="#000" stroke="#000" strokeWidth="7" /></mask></defs><g mask="url(#ev-cut1)"><rect x="8" y="10" width="48" height="44" rx="4" /><path d="M8 24h48M8 38h48M24 10v44M40 10v44" opacity=".35" /><rect x="27" y="27" width="10" height="10" rx="2" /></g><path d="M40 56l16-16 4 4-16 16-6 2z" /></svg>);
  if (i === 2) return (<svg {...p}><defs><mask id="ev-cut2" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><rect width="64" height="64" fill="#fff" stroke="none" /><path d="M56 26a9 9 0 01-12 11L30 52a4 4 0 01-6-6l15-14a9 9 0 0111-11l-6 6 3 3z" fill="#000" stroke="#000" strokeWidth="7" /></mask></defs><g mask="url(#ev-cut2)"><rect x="10" y="8" width="24" height="42" rx="4" /><rect x="15" y="14" width="14" height="10" rx="2" /><path d="M20 30l-2 4h3l-2 5M6 54h32" /></g><path d="M56 26a9 9 0 01-12 11L30 52a4 4 0 01-6-6l15-14a9 9 0 0111-11l-6 6 3 3z" /></svg>);
  if (i === 3) return (<svg {...p}><rect x="12" y="10" width="40" height="46" rx="4" /><path d="M24 6h16v8H24z" /><path d="M20 26l3 3 5-6M33 26h12M20 40l3 3 5-6M33 40h12" /></svg>);
  return (<svg {...p}><path d="M10 34v-4a22 22 0 0144 0v4" /><rect x="6" y="32" width="9" height="14" rx="3" /><rect x="49" y="32" width="9" height="14" rx="3" /><path d="M53 46c0 6-6 8-14 8" /><circle cx="36" cy="54" r="2" /><text x="32" y="38" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" stroke="none">24</text></svg>);
}

function HowWeWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3800);
    return () => clearInterval(t);
  }, [paused]);
  const pick = (i) => { setActive(i); setPaused(true); };
  return (
    <div className="ev-how" onMouseLeave={() => setPaused(false)}>
      <div className="ev-how-bubbles" aria-hidden="true">
        <svg className="ev-how-path" viewBox="0 0 100 110" preserveAspectRatio="none"><path d="M24 20 C60 8 80 20 74 30 S20 40 30 54 S82 56 76 66 S30 84 46 88" /></svg>
        {STEPS.map((s, i) => (
          <button type="button" tabIndex={-1} key={s.title} className={"ev-bubble b" + (i + 1) + (i === active ? " is-active" : "")} onClick={() => pick(i)}>
            <span className="ev-bubble-in"><StepGraphic i={i} /></span>
            <span className="ev-bubble-n">{String(i + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
      <div className="steps ev-steps">
        {STEPS.map((s, i) => (
          <div className={"step" + (i === active ? " is-active" : "")} key={s.title}
            onMouseEnter={() => { setActive(i); setPaused(true); }} onClick={() => pick(i)}>
            <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
            <div><h3>{s.title}</h3><p>{s.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
          <div className="ev-hero-points" aria-label="บริการหลัก">
            <span><i><Icon name="shield" /></i> ออกแบบระบบปลอดภัย</span>
            <span><i><Icon name="network" /></i> บริหารหลายจุดชาร์จ</span>
            <span><i><Icon name="clock" /></i> ดูแลระบบออนไลน์</span>
          </div>
        </div>
        <video
            className="ev-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/ev-hero-poster.jpg"
            aria-hidden="true"
          >
          <source src="/assets/Video/ev-hero.mp4" type="video/mp4" />
        </video>
          <div className="ev-hero-overlay" aria-hidden="true" />

          <div className="wrap">
            {/* eyebrow, h1, lede, ปุ่ม ของเดิมทั้งหมด */}
          </div>
      </section>

      <section className="ev-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHY KIT-WISe EV</div>
              <h2>ออกแบบมาเพื่อ<br />การชาร์จหลายคัน</h2>
              <p  className="lede"><br />ไม่ใช่แค่หัวชาร์จ แต่เป็นระบบที่ดูแลตั้งแต่ความปลอดภัย การเรียกเก็บเงิน ไปจนถึงการเฝ้าระวังหลังติดตั้ง</p>
            </div>
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
            <p className="lede">แต่ละรูปแบบมีข้อดีและขอบเขตงานต่างกัน ปรับขนาดและจำนวนจุดชาร์จได้ตามหน้างาน</p>
          </div>
        </div>
        <div className="ev-models-grid">
          {MODELS.map((m) => (
            <div className="ev-model" key={m.key}>
              <div 
                className="ev-model-visual" 
                style={{ backgroundImage: `url(${m.bgImage})` }}
              >
                {/* ดึงค่า icon จาก m.icon มาแสดงผลแบบไดนามิก */}
                <div className="ev-model-symbol"><Icon name={m.icon} /></div>
                <span className="tag">{m.tag}</span>
                <div className="ev-model-orbit" aria-hidden="true" />
              </div>
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
        <h2>เพิ่มจุดชาร์จได้<br/>ด้วยกำลังไฟเท่าเดิม</h2>
        <p className="lede">เหมาะกับคอนโดและโครงการที่อยู่อาศัยรวมที่ผู้อยู่อาศัยจะทยอยใช้รถ EV ไม่พร้อมกันทั้งหมด</p>
      </div>
    </div>
    <ul className="ev-cost-list">
      {LOAD_POINTS.map((c) => (
        <li key={c.title}>
          <div className="ev-cost-icon"><Icon name={c.icon || "bolt"} /></div>
          <div className="ev-cost-copy">
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
          </div>
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
              <p className="lede">ผู้อยู่อาศัยแต่ละคนมีความต้องการต่างกัน จึงมีรูปแบบการเรียกเก็บให้เลือก และกำไรจากค่าชาร์จช่วยให้นิติบุคคลคืนทุนโครงสร้างพื้นฐานและใช้ดูแลระบบในอนาคต</p>
            </div>
          </div>
          <div className="ev-grid-3">
            {BILLING.map((b) => (
              <div className="ev-feature ev-billing-card" key={b.tag}>
                <div className="ev-feature-top">
                  <div className="ev-icon"><Icon name={b.tag === "STANDARD" ? "clock" : b.tag === "PRIORITY" ? "bolt" : "wallet"} /></div>
                  <span className="ev-billing-tag">{b.tag}</span>
                </div>
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
              <p className="lede">ตั้งแต่เต้ารับ 3.7kW ไปจนถึงสถานีชาร์จ 22kW และศูนย์รวมสำหรับบริหารหลายหัวชาร์จ</p>
            </div>
          </div>
          <div className="ev-grid-3">
            {PRODUCTS.map((p) => (
              <div className="ev-product ev-product-hover-flip" key={p.name} {...flipProps}>
                {p.image && <img src={p.image} alt={p.name} className="ev-product-img" />}
                <span className="ev-power">{p.power}</span>
                <h3>{p.name}</h3>
                <dl>
                  {p.auth && <div><dt>การยืนยันตัวตน</dt><dd>{p.auth}</dd></div>}
                  <div><dt>ฟังก์ชัน</dt><dd>{p.features.join(" · ")}</dd></div>
                  <div><dt>เหมาะกับ</dt><dd>{p.fit}</dd></div>
                </dl>
                <div className="ev-product-image-side">
                  <img src={p.hoverImage || p.image} alt={p.name} />
                  <span className="ev-product-visual-label"><b> {p.name} </b></span>
                </div>
                {/* <div className="ev-product-image-side">
                  <img src={p.hoverImage || p.image} alt={p.name} />
                  <span className="ev-product-visual-label">KIT-WISe <b>EV CHARGING</b></span>
                </div> */}
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
              <p className="lede">ระยะเวลาโดยประมาณ 45–90 วัน ขึ้นกับขนาดและความซับซ้อนของโครงการ</p>
            </div>
          </div>
          <HowWeWork />
        </div>
      </section>

      <section className="ev-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">INVESTMENT</div>
              <h2>ราคาขึ้นกับอะไรบ้าง</h2>
              <p className="lede">ราคาของแต่ละโครงการไม่เท่ากัน เพราะขึ้นกับสภาพหน้างานเป็นหลัก ทีมงานจะสำรวจและเสนอราคาให้ตามความเหมาะสม</p>
            </div>
          </div>
          <ul className="ev-cost-list">
            {COST_FACTORS.map((c, idx) => (
              <li className="ev-product-hover-flip" key={c.title} {...flipProps}>
                <div className="ev-product-content-side">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="ev-cost-badge" aria-hidden="true"><Icon name={c.icon} /></div>
                </div>
                <div className="ev-product-image-side">
                  <InfoGraphic i={idx} />
                  {/* <span className="ev-product-visual-label">KIT-WISe <b>EV CHARGING</b></span> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}