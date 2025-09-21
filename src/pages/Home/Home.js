import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },

    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 10px 25px -3px rgba(0, 0, 0, 0.1)' : 'none'
    },

    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0'
    },

    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.75rem',
      fontWeight: 700,
      textDecoration: 'none',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },

    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem'
    },

    navLink: {
      textDecoration: 'none',
      color: '#64748b',
      fontWeight: 500,
      position: 'relative',
      padding: '0.5rem 0',
      transition: 'color 0.3s ease'
    },

    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    },

    heroContent: {
      textAlign: 'center',
      color: '#ffffff',
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto'
    },

    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#ffffff',
      marginBottom: '1.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },

    heroText: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.95,
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.7
    },

    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    btn: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: 600,
      letterSpacing: '0.5px',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
      border: 'none',
      cursor: 'pointer'
    },

    btnSecondary: {
      background: '#ffffff',
      color: '#334155',
      border: '2px solid #e2e8f0'
    },

    section: {
      padding: '6rem 0'
    },

    sectionHeader: {
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#334155',
      marginBottom: '1rem'
    },

    textGradient: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },

    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },

    serviceCard: {
      background: '#ffffff',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    },

    aboutSection: {
      padding: '6rem 0',
      background: '#ffffff'
    },

    aboutContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },

    aboutText: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: '#64748b'
    },

    testimonialSection: {
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#ffffff'
    },

    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '3rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center'
    },

    contactSection: {
      padding: '6rem 0',
      background: '#1a1a2e',
      color: '#ffffff',
      textAlign: 'center'
    },

    contactDetails: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      margin: '2rem 0',
      flexWrap: 'wrap'
    },

    footer: {
      background: '#16213e',
      color: '#64748b',
      padding: '3rem 0',
      textAlign: 'center'
    },

    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },

    footerTitle: {
      color: '#ffffff',
      marginBottom: '1rem',
      fontSize: '1.25rem',
      fontWeight: 600
    },

    footerBottom: {
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center'
    }
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <nav style={styles.navbar}>
            <a href="#hero" style={styles.logo}>PrintHub Setup</a>
            <ul style={styles.navLinks}>
              <li><a href="#hero" style={styles.navLink}>Home</a></li>
              <li><a href="#services" style={styles.navLink}>Services</a></li>
              <li><a href="#about" style={styles.navLink}>About</a></li>
              <li><a href="#testimonials" style={styles.navLink}>Testimonials</a></li>
              <li><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Transform Your Business with{' '}
              <span style={styles.textGradient}>Professional Digital Solutions</span>
            </h1>
            <p style={styles.heroText}>
              We deliver world-class printing services, stunning website designs, and memorable logo creations that elevate your brand and accelerate your success in the digital age.
            </p>
            <div style={styles.heroButtons}>
              <a href="#contact" style={styles.btn}>
                🚀 Get Free Quote
              </a>
              <a href="#services" style={{ ...styles.btn, ...styles.btnSecondary }}>
                👁️ Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div>
              <h3 style={styles.footerTitle}>PrintHub Setup</h3>
              <p>Transforming businesses through innovative digital solutions, professional printing services, and strategic brand development.</p>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Services</h3>
              <p><a href="#services" style={{ color: '#64748b', textDecoration: 'none' }}>Website Development</a></p>
              <p><a href="#services" style={{ color: '#64748b', textDecoration: 'none' }}>Logo Design</a></p>
              <p><a href="#services" style={{ color: '#64748b', textDecoration: 'none' }}>Digital Marketing</a></p>
              <p><a href="#services" style={{ color: '#64748b', textDecoration: 'none' }}>Professional Printing</a></p>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Contact Info</h3>
              <p>Email: printhubdigit@gmail.com</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2025 PrintHub Setup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
