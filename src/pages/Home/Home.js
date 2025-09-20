import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '0.25rem'
    },
    
    hamburgerSpan: {
      width: '25px',
      height: '3px',
      background: '#334155',
      transition: 'all 0.3s ease',
      borderRadius: '2px'
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
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    },
    
    serviceIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: '#ffffff'
    },
    
    serviceTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#334155',
      marginBottom: '1rem'
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
    
    aboutImage: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
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
    
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.1rem'
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
    
    footerSection: {
      textAlign: 'left'
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
            <div 
              style={styles.hamburger} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span style={styles.hamburgerSpan}></span>
              <span style={styles.hamburgerSpan}></span>
              <span style={styles.hamburgerSpan}></span>
            </div>
          </nav>
        </div>
      </header>

      <main>
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
                <a href="#services" style={{...styles.btn, ...styles.btnSecondary}}>
                  👁️ Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{...styles.section, background: '#f8fafc'}}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>
                Our <span style={styles.textGradient}>Premium Services</span>
              </h2>
              <p>From concept to completion, we provide comprehensive digital solutions that drive results and create lasting impressions for your business.</p>
            </div>
            <div style={styles.servicesGrid}>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>🎨</div>
                <h3 style={styles.serviceTitle}>Website Design & Development</h3>
                <p>Custom, responsive websites built with modern technologies that deliver exceptional user experiences and drive conversions across all devices.</p>
              </div>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>⭐</div>
                <h3 style={styles.serviceTitle}>Logo & Brand Identity</h3>
                <p>Distinctive logos and comprehensive branding solutions that capture your essence and resonate powerfully with your target audience.</p>
              </div>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>🖨️</div>
                <h3 style={styles.serviceTitle}>Professional Printing</h3>
                <p>High-quality business cards, brochures, banners, and marketing materials printed with precision and delivered on time, every time.</p>
              </div>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>📈</div>
                <h3 style={styles.serviceTitle}>Digital Marketing</h3>
                <p>Strategic SEO, social media marketing, and PPC campaigns designed to maximize your online visibility and generate qualified leads.</p>
              </div>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>📱</div>
                <h3 style={styles.serviceTitle}>Mobile Optimization</h3>
                <p>Ensure your digital presence performs flawlessly on all devices with our mobile-first approach to design and development.</p>
              </div>
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>🎧</div>
                <h3 style={styles.serviceTitle}>24/7 Support</h3>
                <p>Dedicated customer support and maintenance services to keep your digital assets running smoothly around the clock.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={styles.aboutSection}>
          <div style={styles.container}>
            <div style={styles.aboutContent}>
              <div style={styles.aboutText}>
                <h2 style={styles.sectionTitle}>
                  About <span style={styles.textGradient}>PrintHub Setup</span>
                </h2>
                <p>Founded on the principles of excellence and innovation, PrintHub Setup has emerged as a premier digital solutions provider, transforming businesses through cutting-edge design and strategic digital marketing.</p>
                <p>Our team of creative professionals and technical experts collaborate to deliver solutions that not only meet your immediate needs but position your business for long-term success in an increasingly digital marketplace.</p>
                <p>From startups to established enterprises, we've helped hundreds of clients achieve their goals through our comprehensive suite of services and unwavering commitment to quality.</p>
              </div>
              <div style={styles.aboutImage}>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern Office Environment"
                  style={{width: '100%', height: '400px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={styles.testimonialSection}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={{...styles.sectionTitle, color: 'white'}}>What Our Clients Say</h2>
            </div>
            <div style={styles.testimonialCard}>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6}}>
                "PrintHub Setup transformed our entire digital presence. Their website design increased our conversion rate by 300%, and their branding work perfectly captured our company's vision. The team's professionalism and attention to detail exceeded all expectations."
              </p>
              <div>
                <strong>Arjun Kumar</strong><br />
                <small>CEO, TechInnovate Solutions</small>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={styles.contactSection}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={{...styles.sectionTitle, color: 'white'}}>
                Ready to <span style={styles.textGradient}>Transform Your Business?</span>
              </h2>
              <p style={{color: '#cbd5e1'}}>Let's discuss how our premium digital solutions can accelerate your growth and establish your market presence.</p>
            </div>
            <div>
              <div style={styles.contactDetails}>
                <div style={styles.contactItem}>
                  <span>✉️</span>
                  <span>printhubdigit@gmail.com</span>
                </div>
                <div style={styles.contactItem}>
                  <span>📞</span>
                  <span>+91 12345 67890</span>
                </div>
                <div style={styles.contactItem}>
                  <span>📍</span>
                  <span>Patna, Bihar, India</span>
                </div>
              </div>
              <a href="mailto:printhubdigit@gmail.com" style={styles.btn}>
                ✈️ Start Your Project Today
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>PrintHub Setup/h3>
              <p>Transforming businesses through innovative digital solutions, professional printing services, and strategic brand development.</p>
            </div>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Services</h3>
              <p><a href="#services" style={{color: '#64748b', textDecoration: 'none'}}>Website Development</a></p>
              <p><a href="#services" style={{color: '#64748b', textDecoration: 'none'}}>Logo Design</a></p>
              <p><a href="#services" style={{color: '#64748b', textDecoration: 'none'}}>Digital Marketing</a></p>
              <p><a href="#services" style={{color: '#64748b', textDecoration: 'none'}}>Professional Printing</a></p>
            </div>
            <div style={styles.footerSection}>
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
