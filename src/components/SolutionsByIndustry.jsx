import { Link } from "react-router-dom";

// function HotelIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//       <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#F2F2F7" strokeWidth="1.6" />
//       <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" />
//       <path d="M10.5 21v-3h3v3" stroke="#F2F2F7" strokeWidth="1.6" strokeLinejoin="round" />
//     </svg>
//   );
// }

function EVIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M8 3v6M16 3v6M6 9h12v4a6 6 0 0 1-12 0V9Z" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19v3" stroke="#F2F2F7" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const INDUSTRIES = [
  // {
  //   key: "hotel",
  //   Icon: HotelIcon,
  //   tag: "HOTEL & RESORT",
  //   title: "Hotel & Resort Smart Energy",
  //   desc: "ระบบจัดการพลังงานสำหรับโรงแรม ลดค่าไฟแอร์และแสงสว่าง คุมเปิด-ปิดอัตโนมัติ พร้อม Dashboard ติดตามผล Real-time เพื่อเพิ่มกำไรให้ธุรกิจ",
  //   cta: "ดูข้อเสนอสำหรับโรงแรม (Hotel Proposal)",
  //   to: "/hotel",
  // },
  {
    key: "ev",
    Icon: EVIcon,
    tag: "COMMERCIAL EV CHARGING",
    title: "Commercial EV Charging Solutions",
    desc: "บริการสำรวจ ออกแบบ ติดตั้งสถานีชาร์จ EV ครบวงจรสำหรับโรงแรม อาคาร และพื้นที่เชิงพาณิชย์ พร้อมระบบบริหารจัดการและคิดเงิน",
    cta: "ดูข้อเสนอติดตั้ง EV Charger (EV Proposal)",
    to: "/ev-charger",
  },
];

export default function SolutionsByIndustry() {
  return (
    <section className="industries" id="industries">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">SOLUTIONS BY INDUSTRY</div>
            <h2>โซลูชันที่ออกแบบ<br />ตามประเภทธุรกิจ</h2>
          </div>
          <p className="lede">
            เลือกโซลูชันที่ตรงกับธุรกิจของคุณได้ทันที ไม่ต้องเดาว่าต้องใช้ผลิตภัณฑ์ตัวไหน
            เราจัดชุดโซลูชันที่พร้อมใช้งานไว้ให้แล้ว
          </p>
        </div>
        <div className="industry-grid">
          {INDUSTRIES.map(({ key, Icon, tag, title, desc, cta, to }) => (
            <div className="industry-card" key={key}>
              <div className="ind-icon"><Icon /></div>
              <span className="ind-tag">{tag}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link to={to} className="btn btn-solid">
                {cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#F2F2F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}