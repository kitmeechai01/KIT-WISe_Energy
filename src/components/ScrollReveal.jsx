import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ส่วนที่ไม่ต้องใส่เอฟเฟกต์ (hero มีอนิเมชันของตัวเอง, เมนู, แถบเลื่อนอัตโนมัติ)
const SKIP = ".hero, .ev-hero, .nav, [class*='marquee']";
// ตัวห่อที่ให้เลื่อนเข้ามาทั้งก้อน (ไม่แยกลูก)
const WHOLE = ".tabs, .section-head, .hero-actions";

function inHorizontalScroller(el) {
  for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
    const ox = getComputedStyle(p).overflowX;
    if (ox === "auto" || ox === "scroll") return true;
  }
  return false;
}

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [];
    const add = (el, delay = 0) => {
      if (!el || el.closest(SKIP) || inHorizontalScroller(el)) return;
      if (!el.dataset.rv) {
        el.dataset.rv = "1";
        el.classList.add("rv");
        el.style.setProperty("--rv-d", `${delay}s`);
      }
      // ถ้า effect รันซ้ำ (React StrictMode) ต้องกลับมาสังเกตรายการที่ยังไม่ปรากฏด้วย
      if (!el.classList.contains("in")) targets.push(el);
    };

    document.querySelectorAll("section").forEach((sec) => {
      if (sec.matches(SKIP)) return;
      const wrap = sec.querySelector(":scope > .wrap") || sec;
      [...wrap.children].forEach((child) => {
        const kids = [...child.children];
        const d = getComputedStyle(child).display;
        if (!child.matches(WHOLE) && (d === "grid" || d === "flex") && kids.length > 1) {
          kids.forEach((k, i) => add(k, Math.min(i, 6) * 0.08));
        } else {
          add(child);
        }
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
