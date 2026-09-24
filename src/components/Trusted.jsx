const PARTNERS = [
  { name: "PZent", logo: "/public/assets/Partner/Mln.jpeg", rounded: false },
  { name: "Partner A", logo: "/public/assets/Partner/Marq.png", rounded: true },
  { name: "Partner B", logo: "/public/assets/Partner/Esara.png", rounded: true },
  { name: "Partner C", logo: "/public/assets/Partner/Urban.jpeg", rounded: false },
  { name: "Partner D", logo: "/public/assets/Partner/PZent.png", rounded: false },
  { name: "Partner E", logo: "/public/assets/Partner/Rmutt.jpeg", rounded: false },
];

export default function Trusted() {
  return (
    <section className="trusted" id="trusted">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">TRUSTED BY</div>
          <h2>ลูกค้าที่ไว้วางใจเรา</h2>
          <p className="lede">
            เปลี่ยนข้อมูลพลังงานให้กลายเป็นข้อมูลที่นำไปใช้ตัดสินใจได้ ตั้งแต่ Monitor → Analyze → Optimize → Control
          </p>
        </div>
        <div className="logo-row">
          {PARTNERS.map((p) => (
            <div className="logo-chip" key={p.name}>
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`logo-chip-img${p.rounded ? " logo-chip-img-rounded" : ""}`}
                />
              ) : (
                p.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}