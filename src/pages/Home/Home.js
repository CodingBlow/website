import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      text: "PrintHub Setup transformed our brand identity completely. Their logo design and website development exceeded all expectations. Professional, creative, and delivered on time.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowFast",
      text: "Outstanding printing quality and digital marketing strategies. Our conversion rates increased by 200% after implementing their recommendations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Minds",
      text: "The team's attention to detail is remarkable. From business cards to our complete website overhaul, every project was handled with utmost professionalism.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies. SEO-optimized, fast-loading, and designed to convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Integration", "Content Management"]
    },
    {
      icon: "🎨",
      title: "Logo & Brand Design",
      description: "Memorable brand identities that capture your essence. Complete branding packages including logos, color schemes, and brand guidelines.",
      features: ["Logo Design", "Brand Identity", "Style Guides", "Business Cards"]
    },
    {
      icon: "🖨️",
      title: "Professional Printing",
      description: "High-quality printing services for all your business needs. From business cards to large format displays, we deliver excellence.",
      features: ["Business Cards", "Brochures", "Banners", "Marketing Materials"]
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive results. Social media management, PPC advertising, and content marketing.",
      features: ["Social Media", "PPC Campaigns", "Content Strategy", "Analytics"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" }
  ];

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
      gap: '2rem',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#64748b',
      fontWeight: 500,
      position: 'relative',
      padding: '0.5rem 0',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.1)',
      zIndex: 1
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
      cursor: 'pointer',
      fontSize: '1rem'
    },
    btnSecondary: {
      background: 'rgba(255, 255, 255, 0.15)',
      color: '#ffffff',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
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
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      lineHeight: 1.6
    },
    textGradient: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    serviceCard: {
      background: '#ffffff',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#334155'
    },
    serviceDescription: {
      color: '#64748b',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
      color: '#334155',
      fontSize: '0.9rem'
    },
    statsSection: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#ffffff',
      padding: '4rem 0'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#667eea',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1.1rem',
      color: '#94a3b8'
    },
    aboutSection: {
      padding: '6rem 0',
      background: '#f8fafc'
    },
    aboutContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    aboutImage: {
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: '#ffffff'
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: '#64748b',
      marginBottom: '1.5rem'
    },
    testimonialSection: {
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#ffffff'
    },
    testimonialContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative'
    },
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '3rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textAlign: 'center',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
    },
    testimonialText: {
      fontSize: '1.25rem',
      lineHeight: 1.7,
      marginBottom: '2rem',
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      fontWeight: 600,
      fontSize: '1.1rem',
      marginBottom: '0.5rem'
    },
    testimonialRole: {
      opacity: 0.9,
      fontSize: '0.95rem'
    },
    testimonialDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem'
    },
    testimonialDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    testimonialDotActive: {
      background: '#ffffff'
    },
    stars: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.25rem',
      marginBottom: '1rem'
    },
    star: {
      color: '#ffd700',
      fontSize: '1.25rem'
    },
    contactSection: {
      padding: '6rem 0',
      background: '#1a1a2e',
      color: '#ffffff',
      textAlign: 'center'
    },
    contactContent: {
      maxWidth: '600px',
      margin: '0 auto'
    },
    contactEmail: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#667eea',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '2rem 0',
      padding: '1rem 2rem',
      border: '2px solid #667eea',
      borderRadius: '50px',
      transition: 'all 0.3s ease'
    },
    footer: {
      background: '#16213e',
      color: '#64748b',
      padding: '3rem 0'
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
    footerText: {
      lineHeight: 1.6,
      marginBottom: '1rem'
    },
    footerLink: {
      color: '#64748b',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      display: 'block',
      marginBottom: '0.5rem'
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
      <section id="hero" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
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

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Our <span style={styles.textGradient}>Expert Services</span>
            </h2>
            <p style={styles.sectionSubtitle}>
              From digital presence to print materials, we provide comprehensive solutions to grow your business.
            </p>
          </div>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <ul style={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={styles.serviceFeature}>
                      <span style={{ color: '#10b981' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container}>
          <div style={styles.aboutContent}>
            <div style={styles.aboutImage}>
              🏢
            </div>
            <div>
              <h2 style={styles.sectionTitle}>
                About <span style={styles.textGradient}>PrintHub Setup</span>
              </h2>
              <p style={styles.aboutText}>
                With over 3 years of experience in digital solutions and printing services, PrintHub Setup has established itself as a trusted partner for businesses looking to enhance their brand presence and marketing effectiveness.
              </p>
              <p style={styles.aboutText}>
                Our team of skilled designers, developers, and marketing experts work collaboratively to deliver solutions that not only look exceptional but also drive measurable results for your business growth.
              </p>
              <p style={styles.aboutText}>
                We pride ourselves on our attention to detail, commitment to deadlines, and our ability to transform your vision into reality through innovative design and cutting-edge technology.
              </p>
              <a href="#contact" style={styles.btn}>
                🤝 Work With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={styles.testimonialSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
              What Our Clients Say
            </h2>
            <p style={{ ...styles.sectionSubtitle, color: 'rgba(255, 255, 255, 0.9)' }}>
              Real feedback from businesses we've helped transform.
            </p>
          </div>
          <div style={styles.testimonialContainer}>
            <div style={styles.testimonialCard}>
              <div style={styles.stars}>
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} style={styles.star}>★</span>
                ))}
              </div>
              <p style={styles.testimonialText}>
                "{testimonials[activeTestimonial].text}"
              </p>
              <div style={styles.testimonialAuthor}>
                {testimonials[activeTestimonial].name}
              </div>
              <div style={styles.testimonialRole}>
                {testimonials[activeTestimonial].role}
              </div>
            </div>
            <div style={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.testimonialDot,
                    ...(index === activeTestimonial ? styles.testimonialDotActive : {})
                  }}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.contactContent}>
            <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
              Ready to <span style={styles.textGradient}>Get Started?</span>
            </h2>
            <p style={{ ...styles.sectionSubtitle, color: 'rgba(255, 255, 255, 0.9)' }}>
              Let's discuss your project and bring your vision to life. Get in touch for a free consultation and quote.
            </p>
            <a 
              href="mailto:printhubdigit@gmail.com" 
              style={styles.contactEmail}
              onMouseEnter={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#667eea';
              }}
            >
              📧 printhubdigit@gmail.com
            </a>
            <div style={{ marginTop: '2rem' }}>
              <a href="#services" style={styles.btn}>
                📋 View Our Services
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
              <p style={styles.footerText}>
                Transforming businesses through innovative digital solutions, professional printing services, and strategic brand development.
              </p>
              <p style={styles.footerText}>
                Your success is our mission. Let's build something amazing together.
              </p>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Our Services</h3>
              <a href="#services" style={styles.footerLink}>Website Development</a>
              <a href="#services" style={styles.footerLink}>Logo & Brand Design</a>
              <a href="#services" style={styles.footerLink}>Digital Marketing</a>
              <a href="#services" style={styles.footerLink}>Professional Printing</a>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Contact Info</h3>
              <p style={styles.footerText}>
                Email: printhubdigit@gmail.com
              </p>
              <p style={styles.footerText}>
                Available Monday - Saturday
              </p>
              <p style={styles.footerText}>
                Quick response guaranteed
              </p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2025 PrintHub Setup. All rights reserved. Built with passion for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
