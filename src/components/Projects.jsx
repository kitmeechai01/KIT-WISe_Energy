import { useState } from "react";

const PROJECTS = [
  { 
    id: "p1", 
    name: "วัชรพล (KW-CENTER)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_ถ่ายวิดีโอบ้านคุณลิม_260826_2.jpg", 
    description: "ติดตั้งระบบจัดการพลังงาน KW-CENTER ที่หน้างานวัชรพล สำหรับติดตามและควบคุมการใช้ไฟฟ้าภายในบ้าน" 
  },{ 
    id: "p2", 
    name: "Skyline Residences", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_ช่างไฟฟ้า แสนดี_260826_1.jpg", 
    description: "ติดตั้งระบบบริหารจัดการพลังงานที่โครงการ Skyline Residences" 
  },{ 
    id: "p3", 
    name: "Marque Resident (KW-C-0108i)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_12267ลงโปรแกรมห้องคุณเพ้ง (ช่องจอด 203)_260826_1.jpg", 
    description: "ลงโปรแกรมระบบ KW-C-0108i ที่ห้องคุณเพ้ง ช่องจอด 203 โครงการ Marque Resident" 
  },{ 
    id: "p4", 
    name: "ESARA CDC (KW-C-0024i)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_ESARA @CDC_260826_3.jpg", 
    description: "ติดตั้งระบบ KW-C-0024i ที่โครงการ ESARA CDC" 
  },{ 
    id: "p5", 
    name: "Krischonme Home", 
    cat: "solar", 
    catLabel: "SOLAR AS A SERVICE", 
    icon: "sun", 
    image: "/assets/341344.jpg", 
    description: "ติดตั้งระบบโซลาร์เซลล์ (Solar as a Service) ที่บ้าน Krischonme Home" 
  },{ 
    id: "p7", 
    name: "Prosper (EV Station)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_พรอสเพอร์_260826_1.jpg", 
    description: "ติดตั้งสถานีชาร์จ EV Station ที่โครงการ Prosper" 
  },{ 
    id: "p8", 
    name: "Prosper (EV Trader)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_242024 Prosper เปลี่ยนเป็นกล่องกันน้ำ_260826_1.jpg", 
    description: "เปลี่ยนตู้ชาร์จ EV เป็นกล่องกันน้ำ ที่โครงการ Prosper" 
  },{ 
    id: "p9", 
    name: "Prosper (EV AIR)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_พรอสเพอร์_260826_2.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV AIR ที่โครงการ Prosper" 
  },{ 
    id: "p10", 
    name: "Millennium Condo (EV AIR)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_โครงการมิลเลนเนียม_260826_2.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV AIR ที่คอนโด Millennium" 
  },{ 
    id: "p11", 
    name: "Millennium Condo (EV AIR)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_Doctor Charger_260826_1.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV AIR (Doctor Charger) ที่คอนโด Millennium" 
  },{ 
    id: "p12", 
    name: "Millennium Condo (EV Station)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_โครงการมิลเลนเนียม_260826_1.jpg", 
    description: "ติดตั้งสถานีชาร์จ EV Station ที่คอนโด Millennium" 
  },{ 
    id: "p13", 
    name: "Marque Resident Condo (EV Trader)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_แก้ไขช่องชาร์จ 347 วันที่ 30 มกราคม_260826_1.jpg", 
    description: "แก้ไขช่องชาร์จ 347 ที่คอนโด Marque Resident" 
  },{ 
    id: "p14", 
    name: "Royce Resident Condo (EV Trader)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/LINE_ALBUM_ROYCE_260826_1.jpg", 
    description: "ติดตั้งระบบ EV Trader ที่คอนโด Royce Resident" 
  },{
    id: "p15", 
    name: "RMUTT (EV AIR+ Ultra)", 
    cat: "multi", 
    catLabel: "MULTI CHARGING", 
    icon: "multi", 
    image: "/assets/328490_0.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV AIR+ Ultra ที่มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT)" 
  },{ 
    id: "p16", 
    name: "Krischonme Home (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_SAN-D บ้าน อ.กฤษชนม์_260826_1.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่บ้าน อ.กฤษชนม์" 
  },{ 
    id: "p17", 
    name: "Im Home (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_SAN-D บ้านคุณอิม_260826_1.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่บ้านคุณอิม" 
  },{ 
    id: "p18", 
    name: "Pzent Office (KW-C-0014)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/339957.jpg", 
    description: "ติดตั้งระบบ KW-C-0014 ที่สำนักงาน Pzent" 
  },{ 
    id: "p19", 
    name: "Yee Home (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_SAN-D บ้านคุณยี้_260826_1.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่บ้านคุณยี้" 
  },{ 
    id: "p20", 
    name: "CANADA (EV MAX6)", 
    cat: "multi", 
    catLabel: "MULTI CHARGING", 
    icon: "multi", 
    image: "/assets/LINE_ALBUM_EV แคนาดา_260826_1.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV MAX6 ที่โครงการแคนาดา" 
  },{ 
    id: "p21", 
    name: "Lim Home (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_ถ่ายวิดีโอบ้านคุณลิม_260826_1.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่บ้านคุณลิม" 
  },{ 
    id: "p22", 
    name: "KMC Ekamai10 (EV AIR)", 
    cat: "ev", 
    catLabel: "EV CHARGING", 
    icon: "plug", 
    image: "/assets/516506_0_0.jpg", 
    description: "ติดตั้งเครื่องชาร์จ EV AIR ที่ KMC เอกมัย 10" 
  },{ 
    id: "p23", 
    name: "Pzent Office (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/2d0db601-894e-4137-b876-1e0ca317644b_f5c68604-2478-4a22-ad2b-1f86ce361718_encrypted.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่สำนักงาน Pzent" 
  },{ 
    id: "p24", 
    name: "KMC Ekamai10 Office (KW-C-0054)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/2dc68e9f-1453-4814-9483-60cd0a7d20c2_03a68dca-7130-4fca-a5ab-d0fde06c0626_encrypted.jpg", 
    description: "ติดตั้งระบบ KW-C-0054 ที่สำนักงาน KMC เอกมัย 10" 
  },{ 
    id: "p25", 
    name: "Koi Home (KIT-WISe 1Ph wifi)", 
    cat: "energy", 
    catLabel: "ENERGY MANAGEMENT", 
    icon: "grid", 
    image: "/assets/LINE_ALBUM_บ้านคุณก้อย รามอินทรา 2332569_260323_9.jpg", 
    description: "ติดตั้งระบบ KIT-WISe 1 เฟส Wi-Fi ที่บ้านคุณก้อย รามอินทรา" 
  }
];

const TABS = [
  { key: "all", label: "ทั้งหมด" },
  { key: "energy", label: "ENERGY MANAGEMENT" },
  { key: "solar", label: "SOLAR AS A SERVICE" },
  { key: "ev", label: "EV CHARGING" },
  { key: "multi", label: "MULTI CHARGING" },
];

function ProjectIcon({ name }) {
  const stroke = "#F2F2F7";
  switch (name) {
    case "plug":
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path d="M8 3v6M16 3v6M6 9h12v4a6 6 0 0 1-12 0V9Z" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19v3" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "sun":
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4.5" stroke={stroke} strokeWidth="1.6" />
          <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1M18.5 18.5l-2.1-2.1M7.6 7.6 5.5 5.5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "multi":
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="9" width="6" height="11" rx="1.4" stroke={stroke} strokeWidth="1.6" />
          <rect x="14" y="4" width="6" height="16" rx="1.4" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case "grid":
    default:
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="12" rx="2" stroke={stroke} strokeWidth="1.6" />
          <path d="M8 20h8M12 16v4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7 12l2.5-3L12 11l2-2.5L17 10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function shade(i) {
  const h1 = (i * 47) % 360;
  const h2 = (i * 47 + 40) % 360;
  return `linear-gradient(155deg, hsl(${h1},55%,22%), hsl(${h2},60%,14%))`;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const visibleProjects =
    activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === activeTab);

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="eyebrow">OUR PROJECTS</div>
        <h2>งานติดตั้งจริง<br />จากลูกค้าของเรา</h2>
        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`tab${activeTab === t.key ? " active" : ""}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {visibleProjects.map((p, i) => (
            <div
              className={`proj-card${expandedId === p.id ? " expanded" : ""}`}
              key={p.id}
              onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
            >
              <div className="proj-thumb" style={!p.image ? { background: shade(i) } : undefined}>
                {p.image ? (
                  <img src={p.image} alt={p.name} className="proj-thumb-img" />
                ) : (
                  <ProjectIcon name={p.icon} />
                )}
              </div>
              <div className="proj-meta">
  <div className="proj-cat">{p.catLabel}</div>
  <h3>{p.name}</h3>
  {expandedId === p.id && p.description && (
    <p className="proj-desc">{p.description}</p>
  )}
  {expandedId !== p.id && (
    <svg className="proj-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )}
</div>
            </div>
          ))}
        </div>
      </div>
      {expandedId && (
        <div className="proj-backdrop" onClick={() => setExpandedId(null)} />
      )}
    </section>
  );
}