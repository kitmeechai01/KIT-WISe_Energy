const AWARDS = [
  { name: "RMUTT Innovation and Invention Awards 2025", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_4.jpg" },
  { name: "OIC Insurtech Award 2025", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_5.jpg" },
  { name: "IoT Sustainability Innovation Award", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_6.jpg" },
  { name: "Best ESG Achievement Award", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_7.jpg" },
  { name: "Scopus Citation Achievement Award", image: "src/assets/Awards/LINE_ALBUM_รูปภาพรางวัล_260916_5.jpg" },
  { name: "Diplôme — Inventions Geneva", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_3.jpg" },
  { name: "NRCT Special Award", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_2.jpg" },
  { name: "Taiwan Invention Association — Certificate of Achievement", image: "src/assets/Awards/LINE_ALBUM_รางวัล_260924_1.jpg" },
];

export default function Awards() {
  return (
    <section className="awards" id="awards">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">AWARDS &amp; RECOGNITION</div>
          <h2>ผลงานที่ได้รับการยอมรับ</h2>
          <p className="lede">
            รวบรวมรางวัลและการรับรองที่ KIT-WISe ได้รับ ทั้งจากเวทีระดับประเทศและระดับนานาชาติ
          </p>
        </div>
        <div className="award-photo-grid">
          {AWARDS.map((a) => (
            <div className="award-photo-card" key={a.name}>
              <img src={a.image} alt={a.name} className="award-photo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
