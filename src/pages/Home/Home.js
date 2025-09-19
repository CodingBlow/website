<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrintHub Setup LLC - Professional Printing Services</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        /* --- 1. General Styles & Color Variables --- */
        /* --- You can easily change your website's colors here --- */
        :root {
            --primary-color: #007bff; /* A nice blue, change if you want */
            --dark-color: #2a2a2a;
            --light-color: #f9f9f9;
            --white-color: #ffffff;
            --text-color: #555;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth; /* Enables smooth scrolling */
        }

        body {
            font-family: 'Poppins', sans-serif;
            color: var(--text-color);
            line-height: 1.7;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 0 2rem;
            overflow: hidden;
        }
        
        section {
            padding: 4rem 0;
        }

        h1, h2 {
            color: var(--dark-color);
            margin-bottom: 1rem;
        }
        
        h2 {
            text-align: center;
            font-size: 2.2rem;
        }
        
        .section-subtitle {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 3rem auto;
        }

        .btn {
            display: inline-block;
            background: var(--primary-color);
            color: var(--white-color);
            padding: 12px 28px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s ease;
        }

        .btn:hover {
            background: #0056b3; /* A darker shade of the primary color */
        }

        /* --- 2. Header & Navigation --- */
        .header {
            background: var(--white-color);
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-color);
            text-decoration: none;
        }

        .nav-links {
            list-style: none;
            display: flex;
        }

        .nav-links li {
            margin-left: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--primary-color);
        }

        /* Hamburger Menu for Mobile */
        .hamburger {
            display: none;
            cursor: pointer;
            font-size: 1.8rem;
        }


        /* --- 3. Hero Section --- */
        #hero {
            background: var(--light-color);
            height: 100vh;
            display: flex;
            align-items: center;
            text-align: center;
        }
        
        .hero-content {
            max-width: 800px;
            margin: auto;
        }

        #hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        #hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        
        /* --- 4. Services Section --- */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .service-card {
            background: var(--white-color);
            padding: 2rem;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-10px);
        }
        
        .service-card .icon {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .service-card h3 {
            font-size: 1.3rem;
            color: var(--dark-color);
            margin-bottom: 0.5rem;
        }
        
        /* --- 5. About Section --- */
        #about {
            background: var(--light-color);
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .about-content img {
            width: 100%;
            border-radius: 10px;
        }
        
        /* --- 6. Testimonials Section --- */
        .testimonial-card {
            background: var(--light-color);
            padding: 2rem;
            border-left: 5px solid var(--primary-color);
            border-radius: 5px;
            max-width: 700px;
            margin: 2rem auto;
        }
        
        .testimonial-card p {
            font-style: italic;
            margin-bottom: 1rem;
        }
        
        .testimonial-card .author {
            font-weight: 700;
            color: var(--dark-color);
        }
        
        /* --- 7. Contact Section --- */
        .contact-info {
            text-align: center;
        }

        /* --- 8. Footer --- */
        .footer {
            background: var(--dark-color);
            color: var(--white-color);
            text-align: center;
            padding: 2rem 0;
        }
        
        /* --- 9. Responsive Styles for Mobile --- */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            h2 {
                font-size: 1.8rem;
            }
            .nav-links {
                display: none;
                flex-direction: column;
                width: 100%;
                background: var(--white-color);
                position: absolute;
                top: 65px;
                left: 0;
                text-align: center;
                padding: 1rem 0;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .nav-links li {
                margin: 1rem 0;
            }
            
            .hamburger {
                display: block;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .about-content img {
                margin-bottom: 2rem;
            }
        }
    </style>
</head>
<body>

    <header class="header">
        <div class="container navbar">
            <a href="#hero" class="logo">PrintHub Setup</a>
            <ul class="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">☰</div>
        </div>
    </header>

    <main>
        <section id="hero">
            <div class="container hero-content">
                <h1>High-Quality Printing, Made Simple & Fast</h1>
                <p>We provide professional printing solutions for your business, from business cards to large banners, with a focus on quality and speed.</p>
                <a href="#contact" class="btn">Get a Free Quote</a>
            </div>
        </section>

        <section id="services">
            <div class="container">
                <h2>Our Services</h2>
                <p class="section-subtitle">We offer a wide range of printing services to meet your needs.</p>

                <div class="services-grid">
                    <div class="service-card">
                        <div class="icon">📇</div>
                        <h3>Business Cards</h3>
                        <p>Premium, high-quality business cards that make a lasting impression.</p>
                    </div>
                    <div class="service-card">
                        <div class="icon">📄</div>
                        <h3>Flyers & Brochures</h3>
                        <p>Promote your business or event with professionally designed flyers.</p>
                    </div>
                    <div class="service-card">
                        <div class="icon">🖼️</div>
                        <h3>Banners & Posters</h3>
                        <p>Large format printing for indoor and outdoor advertising that gets noticed.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="container">
                <h2>About PrintHub Setup</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>PrintHub Setup LLC was founded with a simple mission: to provide businesses with accessible, high-quality printing without the hassle. Based in Patna, we combine modern technology with a passion for print to deliver results that exceed expectations.</p>
                        <p>Our team is dedicated to helping you find the perfect printing solution, ensuring every project is completed on time and to the highest standard.</p>
                    </div>
                    <img src="https://via.placeholder.com/500x350" alt="PrintHub Setup Office">
                </div>
            </div>
        </section>
        
        <section id="testimonials">
            <div class="container">
                 <h2>What Our Clients Say</h2>
                 <div class="testimonial-card">
                     <p>"The quality of the business cards was outstanding, and the customer service was even better. Highly recommended for any business!"</p>
                     <p class="author">- A. Kumar, Patna</p>
                 </div>
            </div>
        </section>


        <section id="contact">
            <div class="container contact-info">
                <h2>Get In Touch</h2>
                <p class="section-subtitle">Ready to start your next printing project? Contact us today for a free, no-obligation quote.</p>
                <h3>Email: contact@printhubsetup.com</h3>
                <h3>Phone: +91 12345 67890</h3>
                <br>
                <a href="mailto:contact@printhubsetup.com" class="btn">Email Us Now</a>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 PrintHub Setup LLC. All Rights Reserved.</p>
        </div>
    </footer>

    <script>
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if(navLinks.classList.contains('active')) {
                   navLinks.classList.remove('active');
                }
            });
        });
    </script>
</body>
</html>
