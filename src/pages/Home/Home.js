import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', margin: '20px auto', maxWidth: '900px', color: '#333' }}>
      <header style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '2px solid #007acc' }}>
        <h1 style={{ color: '#007acc' }}>PrintHub Digital Services</h1>
        <p style={{ fontSize: '18px', marginTop: '8px' }}>
          Elevate your brand with cutting-edge Website Design, Custom Logo Creation, and Digital Marketing Solutions tailored for your success.
        </p>
      </header>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', color: '#005a9e' }}>Our Expertise</h2>
        <p>
          At PrintHub Digital, we specialize in transforming your ideas into compelling digital experiences. Our team of creative designers and marketing professionals work together to deliver:
        </p>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Website Design:</strong> Responsive, user-friendly websites built with modern technologies for all industries.</li>
          <li><strong>Logo Design:</strong> Unique, memorable logos that capture your brand identity and resonate with your audience.</li>
          <li><strong>Brand Identity:</strong> Complete visual branding packages including color schemes, typography, and brand guidelines.</li>
          <li><strong>Digital Marketing:</strong> Tailored strategies including SEO, social media marketing, and pay-per-click campaigns to grow your online presence.</li>
          <li><strong>SEO Optimization:</strong> Technical and content SEO services to improve your search engine rankings and attract organic traffic.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', color: '#005a9e' }}>Why Choose PrintHub Digital?</h2>
        <p>
          Partnering with us means you get a reliable digital agency committed to your growth. Here’s what sets us apart:
        </p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Personalized service with strategic consultation to meet your unique needs.</li>
          <li>Experienced team passionate about delivering excellence and innovation.</li>
          <li>Transparent communication and regular progress updates.</li>
          <li>Affordable pricing tailored for startups, SMBs, and enterprises alike.</li>
          <li>Strong focus on ROI and measurable results to ensure your investment pays off.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px', backgroundColor: '#f0f7ff', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#005a9e' }}>Get in Touch</h2>
        <p>
          Ready to take your digital presence to the next level? Contact PrintHub Digital today for a free consultation and quote.
        </p>
        <p>Email us at <a href="mailto:printhubdigit@gmail.com" style={{ color: '#007acc' }}>printhubdigit@gmail.com</a></p>
      </section>

      <footer style={{ marginTop: '60px', borderTop: '1px solid #ccc', paddingTop: '15px', textAlign: 'center', color: '#777', fontSize: '14px' }}>
        <small>© 2025 PrintHub Digital. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default Home;
