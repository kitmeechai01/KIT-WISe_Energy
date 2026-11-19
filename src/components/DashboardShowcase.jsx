import { useEffect, useRef, useState } from "react";
import "../dash-carousel.css";

// TODO: ใส่ภาพหน้าจอจริงไว้ที่ public/assets/dashboards/ (ชื่อไฟล์ภาษาอังกฤษ ไม่มีวรรค)
// แล้วแก้ image / title / desc ให้ตรงกับภาพนั้น ตัวไหนยังเป็น null จะโชว์กราฟตัวอย่างแทน
// ห้ามให้ในภาพมีชื่อ อีเมล หรือเลขห้องของลูกค้า
const DASHBOARDS = [
  {
    id: "usage",
    title: "KMC Facility Management",
    desc: "ดูปริมาณการใช้ไฟฟ้าแบบเรียลไทม์ พร้อมย้อนดูประวัติเป็นชั่วโมง วัน เดือน และปี เพื่อรู้ว่าไฟถูกใช้ไปที่ไหนและเมื่อไหร่",
    image: "/assets/kmcefac.png",
  },
//   {
//     id: "control",
//     title: "Remote Control",
//     desc: "สั่งเปิด-ปิดวงจร ตั้งเวลา และเลือกฟังก์ชันป้องกันกับระดับความอ่อนไหวได้จากทุกที่ผ่านแอป",
//     image: null,
//   },
  {
    id: "alerts",
    title: "Safety Alerts",
    desc: "แจ้งเตือนทันทีเมื่อพบความเสี่ยง เช่น ไฟรั่ว กระแสเกิน แรงดันผิดปกติ หรือประกายไฟอาร์ค รวมถึงเมื่ออุปกรณ์ไม่ทำงาน",
    image: "/assets/kmcemornitor.jpeg",
  },
  {
    id: "ev",
    title: "EV Charging",
    desc: "ดูสถานะการชาร์จของแต่ละจุด ควบคุมสถานะการชาร์จ และเปิดดูประวัติการชาร์จย้อนหลัง",
    image: "/assets/webev.jpeg",
  },
  {
    id: "billing",
    title: "Billing & Reports",
    desc: "แดชบอร์ดสำหรับดูการใช้พลังงาน การใช้ไฟ และยอดค่าใช้จ่าย พร้อมทั้งดูสถานนะอุปกรณ์ได้ ",
    image: "/assets/mockPzent.jpeg",
  },
  {
    id: "admin",
    title: "KITWISe-Center Console",
    desc: "ระบบบริหารผู้ใช้และพลังงานสำหรับตู้ KITWISe CENTER เช่น บ้านเดี่ยว คอนโด โรงแรม หรืออาคารสำนักงานต่างๆ พร้อมทีมเฝ้าระวังออนไลน์ 24 ชั่วโมง",
    image: "/assets/Center.jpeg",
  },
];

function Thumb({ item, className }) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt={item.title}
        className={className}
        loading="lazy"
        draggable="false"
      />
    );
  }
  // กราฟตัวอย่าง (ไม่มีตัวเลข) ใช้แทนจนกว่าจะใส่ภาพจริง
  return (
    <div className={`${className} dash-ph`} role="img" aria-label={item.title}>
      <svg viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="200" fill="#000863" />
        <rect x="16" y="16" width="130" height="44" rx="8" fill="#0C1573" />
        <rect x="162" y="16" width="142" height="44" rx="8" fill="#0C1573" />
        <polyline
          points="16,138 60,116 100,144 140,102 180,120 220,82 260,98 304,64"
          stroke="#F2F2F7"
          strokeOpacity="0.85"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#5EEAD4" fillOpacity="0.5">
          <rect x="16" y="166" width="30" height="20" rx="3" />
          <rect x="56" y="156" width="30" height="30" rx="3" />
          <rect x="96" y="148" width="30" height="38" rx="3" />
          <rect x="136" y="162" width="30" height="24" rx="3" />
          <rect x="176" y="144" width="30" height="42" rx="3" />
          <rect x="216" y="156" width="30" height="30" rx="3" />
          <rect x="256" y="140" width="30" height="46" rx="3" />
        </g>
      </svg>
    </div>
  );
}

function Group({ items, onOpen, hidden }) {
  return (
    <div className="marquee-group" aria-hidden={hidden ? "true" : undefined}>
      {items.map((item, i) => (
        <button
          key={item.id}
          type="button"
          className="dash-card"
          tabIndex={hidden ? -1 : 0}
          onClick={(e) => onOpen(i, e.currentTarget)}
        >
          <Thumb item={item} className="dash-card-img" />
          <span className="dash-card-title">{item.title}</span>
          <span className="dash-card-hint">คลิกเพื่อขยายและดูรายละเอียด</span>
        </button>
      ))}
    </div>
  );
}

export default function DashboardShowcase() {
  const [open, setOpen] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const marqueeRef = useRef(null);
  // สถานะของแถบเลื่อน: hover / กำลังลาก / เวลาที่ผู้ใช้โต้ตอบล่าสุด / เปิดภาพขยายอยู่
  const st = useRef({ hover: false, drag: false, last: 0, open: false, moved: false }).current;

  const isOpen = open !== null;
  const current = isOpen ? DASHBOARDS[open] : null;
  const total = DASHBOARDS.length;

  const openAt = (i, el) => {
    // ปุ่มในชุดสำเนา (aria-hidden) ไม่ต้องคืนโฟกัสกลับไป
    lastFocus.current = el.closest('[aria-hidden="true"]') ? null : el;
    setOpen(i);
  };

  useEffect(() => {
    st.open = isOpen;
  }, [isOpen, st]);

  // แถบเลื่อนอัตโนมัติ + เลื่อนย้อนกลับ/ไปข้างหน้าเองได้ (ปัด, ลาก, ปุ่มลูกศร) วนไม่รู้จบ (3 ชุดต่อกัน)
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const first = el.querySelector(".marquee-group");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const G = () => first.offsetWidth;
    let pos = 0;
    let raf;
    let prev = performance.now();

    el.scrollLeft = G(); // เริ่มที่ชุดกลาง เพื่อให้เลื่อนย้อนกลับได้ทันที
    pos = el.scrollLeft;

    const onScroll = () => {
      const g = G();
      if (!g) return;
      const s = el.scrollLeft;
      if (Math.abs(s - pos) > 1.5) {
        pos = s; // ผู้ใช้เป็นคนเลื่อน
        st.last = performance.now();
      }
      if (s >= 2 * g) { el.scrollLeft = s - g; pos = s - g; }
      else if (s <= 1) { el.scrollLeft = s + g; pos = s + g; }
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    const tick = (t) => {
      const dt = Math.min(64, t - prev);
      prev = t;
      const idle = t - st.last > 3000;
      if (!reduce && idle && !st.hover && !st.drag && !st.open && !document.hidden) {
        const g = G();
        pos += 0.04 * dt; // ประมาณ 40px ต่อวินาที
        if (pos >= 2 * g) pos -= g;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // ลากด้วยเมาส์
    let startX = 0;
    let startSL = 0;
    const onMove = (e) => {
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) st.moved = true;
      el.scrollLeft = startSL - dx;
    };
    const onUp = () => {
      st.drag = false;
      st.last = performance.now();
      el.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      setTimeout(() => { st.moved = false; }, 0);
    };
    const onDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      st.drag = true;
      st.moved = false;
      startX = e.clientX;
      startSL = el.scrollLeft;
      el.classList.add("is-dragging");
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    };
    el.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [st]);

  const nudge = (dir) => {
    const el = marqueeRef.current;
    if (!el) return;
    const first = el.querySelector(".marquee-group");
    const card = first.querySelector(".dash-card");
    const g = first.offsetWidth;
    if (el.scrollLeft > 1.5 * g) el.scrollLeft -= g;
    else if (el.scrollLeft < 0.5 * g) el.scrollLeft += g;
    st.last = performance.now();
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") setOpen((i) => (i + 1) % total);
      else if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.();
    };
  }, [isOpen, total]);

  return (
    <div className="dash-showcase">
      {/* <div className="wrap dash-showcase-head">
        <div className="eyebrow">DASHBOARD PREVIEW</div>
        <h3>หน้าจอที่คุณจะได้ใช้งานจริง</h3>
        <p className="lede">ชี้เมาส์ที่ภาพเพื่อหยุดเลื่อน คลิกเพื่อขยายและอ่านว่าแต่ละหน้าจอใช้ทำอะไร</p>
      </div> */}

      <div className="dash-carousel">
        <button type="button" className="dash-arrow prev" aria-label="ภาพก่อนหน้า" onClick={() => nudge(-1)}>‹</button>
        <button type="button" className="dash-arrow next" aria-label="ภาพถัดไป" onClick={() => nudge(1)}>›</button>
        <div
          ref={marqueeRef}
          className={`marquee is-js${isOpen ? " is-paused" : ""}`}
          onMouseEnter={() => { st.hover = true; }}
          onMouseLeave={() => { st.hover = false; st.last = performance.now(); }}
          onTouchStart={() => { st.last = performance.now(); }}
          onClickCapture={(e) => { if (st.moved) { e.preventDefault(); e.stopPropagation(); } }}
        >
          <div className="marquee-track">
            <Group items={DASHBOARDS} onOpen={openAt} hidden />
            <Group items={DASHBOARDS} onOpen={openAt} />
            <Group items={DASHBOARDS} onOpen={openAt} hidden />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="dash-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dash-modal-title"
          onClick={() => setOpen(null)}
        >
          <div className="dash-modal-body" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeRef}
              type="button"
              className="dash-close"
              aria-label="ปิด"
              onClick={() => setOpen(null)}
            >
              ×
            </button>
            <Thumb item={current} className="dash-modal-img" />
            <div className="dash-modal-info">
              <div className="eyebrow">
                DASHBOARD {String(open + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <h3 id="dash-modal-title">{current.title}</h3>
              <p>{current.desc}</p>
              <div className="dash-modal-nav">
                <button type="button" onClick={() => setOpen((open - 1 + total) % total)}>
                  ← ก่อนหน้า
                </button>
                <button type="button" onClick={() => setOpen((open + 1) % total)}>
                  ถัดไป →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}