import './App.css';
import aboutImg from './assets/image.png';
import resumePdf from './assets/Keval_Jagal_Resume Accounting farm.pdf';

function App() {
  const responsibilities = [
    { title: "Accounting & Bookkeeping", desc: "Maintaining accurate financial records and ensuring compliance with standards." },
    { title: "Bank Reconciliation", desc: "Verifying bank statements against internal records to ensure consistency." },
    { title: "AR/AP Reconciliation", desc: "Managing accounts receivable and payable to maintain healthy cash flow." },
    { title: "Payroll Management", desc: "Ensuring timely and accurate payroll processing for the team." },
    { title: "Financial Analysis", desc: "Providing monthly deep-dives into financial data for strategic insights." },
    { title: "Client Handling", desc: "Building and maintaining professional relationships with key clients." }
  ];

  return (
    <div className="portfolio">
      <section className="hero">
        <div className="hero-content">
          <h2>Senior Accountant & Team Leader</h2>
          <h1>Keval Jagal</h1>
          <p>
            Professional Accountant with a focus on financial precision and team leadership.
            Driving excellence in accounting practices at Accounting Farm since 2022.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/keval-jagal-748551250/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/kevaljagal/" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href={resumePdf} download="Keval_Jagal_Resume.pdf" className="social-link resume-button">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={aboutImg} alt="Keval Jagal" />
        </div>
      </section>

      <section id="responsibilities">
        <h2 className="section-title">Key Responsibilities</h2>
        <div className="responsibilities-grid">
          {responsibilities.map((item, index) => (
            <div key={index} className="responsibility-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-card">
          <h3 className="company-name">Accounting Farm</h3>
          <span className="experience-period">October 2022 — Present</span>
          <p>
            Leading the accounting team to deliver high-quality financial services,
            overseeing complex reconciliations, and ensuring client satisfaction
            through meticulous financial management.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-label">Phone</span>
            <a href="tel:+917984422579" className="contact-value">+91 79844 22579</a>
          </div>
          <div className="contact-card">
            <span className="contact-label">Email</span>
            <a href="mailto:kevaljagal582@gmail.com" className="contact-value">kevaljagal582@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="contact-label">Location</span>
            <span className="contact-value">Ahmedabad, Gujarat</span>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--card-border)' }}>
        © {new Date().getFullYear()} Keval Jagal. All rights reserved.
      </footer>
    </div>
  )
}

export default App
