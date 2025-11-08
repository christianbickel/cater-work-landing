// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

// --- Platzhalter für Komponenten (werden unten erstellt) ---
const Header = ({ onCtaClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Cater.Work</div>
        <button onClick={onCtaClick} className={styles.headerCta}>Jetzt Zugang sichern</button>
      </div>
    </header>
  );
};

const EmailForm = ({ onSubmit, message }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.emailForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse"
          required
          className={styles.emailInput}
        />
        <button type="submit" className={styles.ctaButton}>Jetzt registrieren</button>
      </form>
      {message && <p className={styles.successMessage}>{message}</p>}
    </div>
  );
};


// --- Die Haupt-Komponente ---
export default function HomePage() {
  const [formMessage, setFormMessage] = useState('');

  const handleFormSubmit = async (email) => {
    console.log("E-Mail-Adresse für die Registrierung:", email);
    // HIER kommt die Logik zum Senden der E-Mail an Ihren Service (z.B. Mailchimp, ConvertKit, oder eine eigene API)
    setFormMessage('Vielen Dank! Wir haben Sie auf die Liste gesetzt und melden uns bald.');
  };
  
  const scrollToCta = () => {
    document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cater.Work | Schluss mit dem Personal-Chaos in der Gastronomie</title>
        <meta name="description" content="Organisieren Sie Ihr Catering-Personal in Minuten. Sparen Sie Zeit, Nerven und Geld mit Cater.Work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onCtaClick={scrollToCta} />

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Schluss mit dem Personal-Chaos.</h1>
            <p className={styles.subtitle}>
              Organisieren Sie Ihr Catering-Personal in Minuten, nicht in Stunden. Sparen Sie Zeit, Nerven und Geld.
            </p>
            <EmailForm onSubmit={handleFormSubmit} message={formMessage} />
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Kommt Ihnen das bekannt vor?</h2>
            <div className={styles.problemGrid}>
                <div className={styles.problemCard}>
                    <h3>Stundenlanges betteln</h3>
                    <p>Sie jagen Personal in unzähligen WhatsApp-Gruppen und Chatten mit Freelancern, statt sich um Ihre Kunden zu kümmern.</p>
                </div>
                 <div className={styles.problemCard}>
                    <h3>Kurzfristige Änderungen</h3>
                    <p>Kurzfristige Absagen und No-Shows bringen Ihre Event-Planung ins Wanken und sorgen für puren Stress.</p>
                </div>
                 <div className={styles.problemCard}>
                    <h3>Gestresste Mitarbeiter</h3>
                    <p>Veraltete Listen, fehlender Informationsfluss und ständige Änderungen stressen nicht nur Sie, sondern auch die Mitarbeiter.</p>
                </div>
            </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className={`${styles.solution} ${styles.section}`}>
            <div className={styles.solutionContent}>
                <div className={styles.solutionText}>
                    <h2 className={styles.sectionTitle}>Ihre Personalplanung. Endlich einfach.</h2>
                    <p>Cater.Work ist die erste Plattform, die speziell für die Bedürfnisse der Catering-Branche entwickelt wurde. So funktioniert's:</p>
                    <ul className={styles.solutionList}>
                        <li>
                            <span>1</span>
                            <div>
                                <strong>Event erstellen:</strong><br />Legen Sie Ihre Events mit allen Details an: Ort, Zeit, benötigtes Personal je Fähigkeit (Service, Küche, Bar, etc.). <br/>Dauert keine 5 Minuten.
                            </div>
                        </li>
                        <li>
                            <span>2</span>
                            <div>
                                <strong>Passende Profile erhalten:</strong><br />Unser smarter Agent verbindet Ihr Event sofort mit dem verfügbaren Personal und übernimmt die Kommunikation mit den Freelancern.
                            </div>
                        </li>
                        <li>
                            <span>3</span>
                            <div>
                                <strong>Personal buchen:</strong><br />Sie bestätigen die Bewerbungen und kommunizieren bei Bedarf direkt mit dem Team. Sagt jemand ab, sucht der Agent automatisch Ersatz.
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Dashboard-Bild */}
                <div className={styles.solutionImagePlaceholder}>
                    <img src="/dash.png" alt="Cater.Work Dashboard" className={styles.dashboardImage} />
                </div>
            </div>
        </section>

        {/* CTA SECTION */}
        <section id="cta-section" className={`${styles.ctaSection} ${styles.section}`}>
            <h2 className={styles.sectionTitle}>Exklusives Pilotkunden-Angebot</h2>
            <p className={styles.subtitle}>Wir starten demnächst in ausgewählten Regionen und suchen Pilot-Anwender.</p>
            <p className={styles.subtitle}>Registrieren Sie sich jetzt für den Frühzugang und sichern Sie sich als Dankeschön<br/>einen <strong>3-monatigen kostenlosen Zugang</strong> zu unserem Pro-Plan*)<br/>und <strong>50% lebenslangen Rabatt</strong>.</p>
            <EmailForm onSubmit={handleFormSubmit} message={formMessage} />
            <p className={styles.subtitle}>Wir informieren Sie, sobald Cater.Work in Ihrer Region startet.<br/>*) Der Cater.Work Pro-Plan kostet regulär € 68,-- monatlich.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Cater.Work | Impressum | Datenschutz</p>
      </footer>
    </div>
  );
}