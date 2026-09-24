export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <div>
            <h2>ยกระดับการใช้พลังงาน?</h2>
            <p className="lede">ให้ทีมของเราช่วยดูว่าโซลูชันไหนเหมาะกับธุรกิจของคุณ</p>
          </div>
          <button
            className="btn btn-solid"
            onClick={() => {
              // TODO: replace with a real mailto:, tel:, or LINE link
              window.location.href = "https://lin.ee/yDRXii3";
            }}
          >
            พูดคุยกับทีม KIT-WISe
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#F2F2F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
