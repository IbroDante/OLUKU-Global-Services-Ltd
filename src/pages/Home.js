import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaFish,
  FaTruck,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaProjectDiagram,
  FaAward, FaPhone,
  FaGlobeAfrica, 
} from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  const heroSlides = [
    {
      title: 'Building Nigeria\'s Future',
      subtitle: 'Property Acquisition & Development',
      description:
        'Transforming landscapes across all 36 states of Nigeria with world-class property solutions that stand the test of time.',
      cta: 'Explore Properties',
      link: '/services',
      overlay: 'overlay-blue',
    },
    {
      title: 'Farm Fresh Excellence',
      subtitle: 'Fish Farming & Production',
      description:
        'From our state-of-the-art fish farm in Bwari, Abuja to tables across Nigeria and beyond — premium quality guaranteed.',
      cta: 'Discover Our Farm',
      link: '/services',
      overlay: 'overlay-green',
    },
    {
      title: 'Your Trusted Partner',
      subtitle: 'Since 2019',
      description:
        'CAC Registered (RC: 2025440) — Delivering integrity, quality, and results in every project we undertake.',
      cta: 'Learn About Us',
      link: '/about',
      overlay: 'overlay-dark',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setCountersVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FaBuilding />,
      title: 'Property Acquisition',
      description:
        'Strategic land and property acquisition across all states in Nigeria with proper documentation and legal backing.',
      features: ['Land Surveying', 'Title Documentation', 'Due Diligence'],
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Property Development',
      description:
        'End-to-end property development from architectural design to final construction with premium finishing.',
      features: [
        'Residential Projects',
        'Commercial Buildings',
        'Estate Development',
      ],
    },
    {
      icon: <FaFish />,
      title: 'Fish Farming',
      description:
        'Modern aquaculture practices producing healthy, premium-quality fish at our Bwari, Abuja facility.',
      features: ['Catfish Production', 'Tilapia Farming', 'Fingerling Supply'],
    },
    {
      icon: <FaTruck />,
      title: 'Processing & Distribution',
      description:
        'Professionally smoked and packaged fish products distributed nationwide and for international export.',
      features: [
        'Smoked Fish',
        'Packaged Products',
        'Export Services',
      ],
    },
  ];

  const stats = [
    { icon: <FaUsers />, number: 500, suffix: '+', label: 'Happy Clients' },
    {
      icon: <FaProjectDiagram />,
      number: 150,
      suffix: '+',
      label: 'Projects Completed',
    },
    { icon: <FaAward />, number: 5, suffix: '+', label: 'Years Experience' },
    {
      icon: <FaGlobeAfrica />,
      number: 36,
      suffix: '',
      label: 'States Coverage',
    },
  ];

  const testimonials = [
    {
      name: 'Chief Adebayo Johnson',
      role: 'Property Investor',
      text: 'Oluku Global Services exceeded my expectations in every way. Their property acquisition process was seamless, transparent, and professionally handled. I highly recommend them.',
      rating: 5,
    },
    {
      name: 'Mrs. Ngozi Okafor',
      role: 'Restaurant Owner',
      text: 'The quality of smoked fish from Oluku is consistently excellent. They deliver on time and the packaging is top-notch. A reliable partner for my business.',
      rating: 5,
    },
    {
      name: 'Alhaji Musa Ibrahim',
      role: 'Real Estate Developer',
      text: 'Working with Oluku on our estate project was a great decision. Professional team, quality delivery, and they kept to the timeline. Outstanding service!',
      rating: 5,
    },
  ];

  const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!countersVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

  return (
    <main>
      {/* ====== HERO SECTION ====== */}
      <section className="hero">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? 'hero-slide-active' : ''
            } ${slide.overlay}`}
          >
            <div className="hero-bg-pattern"></div>
            <div className="container hero-content">
              <div className="hero-badge">
                <FaCheckCircle /> CAC Registered Company
              </div>
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-buttons">
                <Link to={slide.link} className="btn btn-primary btn-lg">
                  {slide.cta} <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${
                index === currentSlide ? 'hero-indicator-active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ====== WELCOME SECTION ====== */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-images">
              <div className="welcome-img-main">
                <img
  src="/images/about/office.jpg"
  alt="Property Development"
  className="welcome-real-img"
/>
              </div>
              <div className="welcome-img-secondary">
                <div className="placeholder-img placeholder-img-fish">
                  <FaFish className="placeholder-icon" />
                  <span>Fish Farming</span>
                </div>
              </div>
              <div className="welcome-experience-badge">
                <span className="experience-number">5+</span>
                <span className="experience-text">Years of Excellence</span>
              </div>
            </div>
            <div className="welcome-content">
              <span className="section-label">Welcome to Oluku Global</span>
              <h2 className="section-title">
                We Build, We Farm,{' '}
                <span className="text-accent">We Deliver</span>
              </h2>
              <div className="welcome-divider"></div>
              <p className="welcome-text">
                <strong>Oluku Global Services Limited (RC: 2025440)</strong> is
                a CAC-registered company established in 2019, dedicated to
                transforming Nigeria through quality property development and
                sustainable agriculture.
              </p>
              <p className="welcome-text">
                Under the visionary leadership of{' '}
                <strong>Mr. Kunle Atitebi</strong>, our Chief Executive, we
                have grown from a local enterprise to a nationally recognized
                brand delivering exceptional services across Nigeria and
                beyond.
              </p>
              <div className="welcome-features">
                <div className="welcome-feature">
                  <FaCheckCircle className="welcome-feature-icon" />
                  <span>Property Acquisition in All 36 States</span>
                </div>
                <div className="welcome-feature">
                  <FaCheckCircle className="welcome-feature-icon" />
                  <span>Modern Fish Farming & Production</span>
                </div>
                <div className="welcome-feature">
                  <FaCheckCircle className="welcome-feature-icon" />
                  <span>National & International Distribution</span>
                </div>
                <div className="welcome-feature">
                  <FaCheckCircle className="welcome-feature-icon" />
                  <span>CAC Registered & Fully Compliant</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Our Core <span className="text-accent">Services</span>
            </h2>
            <p className="section-subtitle">
              From property acquisition to fish farming, we deliver excellence
              across every sector we operate in.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>
                <ul className="service-card-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="service-card-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="section stats-section">
        <div className="stats-overlay"></div>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

{/* ====== VIDEO SECTION ====== */}
<section className="section video-section">
  <div className="container">
    <div className="section-header text-center">
      <span className="section-label">See Us In Action</span>
      <h2 className="section-title">
        Our Fish Farm <span className="text-accent">In Action</span>
      </h2>
      <p className="section-subtitle">
        Take a virtual tour of our modern fish farming facility at Kuchiko,
        Bwari, Abuja — where quality meets sustainability.
      </p>
    </div>
    <div className="video-wrapper">
      <div className="video-container">
        <video
          controls
          preload="metadata"
          className="video-player"
        >
          <source src="/videos/fish-pond.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-features">
        <div className="video-feature-item">
          <div className="video-feature-icon">🐟</div>
          <div>
            <h4>50+ Fish Ponds</h4>
            <p>State-of-the-art pond system for maximum yield</p>
          </div>
        </div>
        <div className="video-feature-item">
          <div className="video-feature-icon">🌊</div>
          <div>
            <h4>Clean Water System</h4>
            <p>Advanced water filtration and quality monitoring</p>
          </div>
        </div>
        <div className="video-feature-item">
          <div className="video-feature-icon">📦</div>
          <div>
            <h4>Processing Facility</h4>
            <p>Hygienic smoking and packaging on-site</p>
          </div>
        </div>
        <div className="video-feature-item">
          <div className="video-feature-icon">🌍</div>
          <div>
            <h4>Export Ready</h4>
            <p>Products meeting international quality standards</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ====== WHY CHOOSE US SECTION ====== */}
      <section className="section why-us-section">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">
                What Sets Us{' '}
                <span className="text-accent">Apart</span>
              </h2>
              <div className="why-us-items">
                <div className="why-us-item">
                  <div className="why-us-item-number">01</div>
                  <div className="why-us-item-content">
                    <h4>Registered & Certified</h4>
                    <p>
                      Fully registered with CAC (RC: 2025440), ensuring
                      transparency and legal compliance in all transactions.
                    </p>
                  </div>
                </div>
                <div className="why-us-item">
                  <div className="why-us-item-number">02</div>
                  <div className="why-us-item-content">
                    <h4>Nationwide Coverage</h4>
                    <p>
                      Property acquisition and development services available
                      across all 36 states and the FCT.
                    </p>
                  </div>
                </div>
                <div className="why-us-item">
                  <div className="why-us-item-number">03</div>
                  <div className="why-us-item-content">
                    <h4>Quality Assurance</h4>
                    <p>
                      Every project and product undergoes rigorous quality
                      checks to meet international standards.
                    </p>
                  </div>
                </div>
                <div className="why-us-item">
                  <div className="why-us-item-number">04</div>
                  <div className="why-us-item-content">
                    <h4>Expert Leadership</h4>
                    <p>
                      Led by Mr. Kunle Atitebi, an industry veteran with deep
                      expertise in property and agriculture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-visual">
              <div className="why-us-visual-card">
                <img
  src="/images/about/ceo2.jpg"
  alt="Mr. Kunle Atitebi - CEO"
  className="about-real-img about-real-img-large"
/>
                <div className="why-us-ceo-info">
                  <h4>Mr. Kunle Atitebi</h4>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS SECTION ====== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="section cta-section">
        <div className="cta-pattern"></div>
        <div className="container text-center">
          <h2 className="cta-title">
            Ready to Start Your Next Big Project?
          </h2>
          <p className="cta-description">
            Whether it's acquiring prime property or sourcing quality fish
            products, Oluku Global Services is your trusted partner.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white btn-lg">
              Contact Us Today <FaArrowRight />
            </Link>
            <a href="tel:08025551994" className="btn btn-outline-white btn-lg">
              <FaPhone /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;