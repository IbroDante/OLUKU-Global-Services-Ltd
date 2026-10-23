import React from 'react';
import { Link } from 'react-router-dom';
import {
 
  FaHandshake,
  FaEye,
  FaBullseye,
  FaHeart,
  FaArrowRight,
  FaAward,
  FaUsers,
  FaGlobeAfrica,
  FaShieldAlt,
  FaLightbulb,
  FaSeedling,
  FaBalanceScale,
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Integrity',
      description:
        'We conduct every transaction with transparency, honesty, and ethical standards that build lasting trust.',
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description:
        'We pursue the highest quality in every project, product, and service we deliver to our clients.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description:
        'We embrace modern techniques and technologies to stay ahead in property development and aquaculture.',
    },
    {
      icon: <FaSeedling />,
      title: 'Sustainability',
      description:
        'We are committed to environmentally responsible practices in all our farming and development activities.',
    },
    {
      icon: <FaUsers />,
      title: 'Client Focus',
      description:
        'Our clients are at the heart of everything we do. We listen, adapt, and deliver beyond expectations.',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Accountability',
      description:
        'As a CAC-registered entity, we uphold the highest standards of corporate governance and responsibility.',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Registration',
      description:
        'Oluku Global Services Limited was registered with the Corporate Affairs Commission (RC: 2025440).',
    },
    {
      year: '2020',
      title: 'Property Operations Begin',
      description:
        'Commenced property acquisition and development services across the FCT and neighboring states.',
    },
    {
      year: '2021',
      title: 'Fish Farm Established',
      description:
        'Established our modern fish farming facility at Km 4, along Nigerian Law School, Kuchiko, Bwari.',
    },
    {
      year: '2022',
      title: 'Nationwide Expansion',
      description:
        'Expanded property services to cover all 36 states of Nigeria with a growing client base.',
    },
    {
      year: '2023',
      title: 'Export Operations',
      description:
        'Began processing and packaging smoked fish for distribution both locally and internationally.',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description:
        'Ongoing expansion of both property portfolio and agricultural output with new partnerships.',
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-pattern"></div>
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-label">Who We Are</span>
            <h1 className="page-header-title">About Our Company</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section about-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-images">
              <div className="about-img-stack">
                <div className="about-img-1">
                  <img
  src="/images/about/office.jpg"
  alt="Oluku Global Head Office"
  className="about-real-img"
/>
                </div>
                <div className="about-img-2">
                  <img
  src="/images/about/fish-pond.jpg"
  alt="Fish Farm Kuchiko Bwari"
  className="about-real-img"
/>
                </div>
              </div>
              <div className="about-badge-card">
                <div className="about-badge-icon">
                  <FaAward />
                </div>
                <div>
                  <h4>CAC Registered</h4>
                  <p>RC: 2025440</p>
                </div>
              </div>
            </div>
            <div className="about-intro-content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Building Dreams,{' '}
                <span className="text-accent">Growing Futures</span>
              </h2>
              <p>
                <strong>Oluku Global Services Limited</strong> was formally
                registered in 2019 with the Corporate Affairs Commission of
                Nigeria under RC: 2025440. Since inception, we have been
                dedicated to two major pillars of economic development:{' '}
                <strong>Property Acquisition & Development</strong> and{' '}
                <strong>Fish Farming & Production</strong>.
              </p>
              <p>
                Our property division operates across all 36 states of Nigeria
                and the FCT, providing comprehensive real estate solutions
                including land acquisition, property development, and project
                management. We have helped hundreds of individuals and
                organizations secure and develop prime properties.
              </p>
              <p>
                Our agricultural arm focuses on modern fish farming at our
                facility in Kuchiko, Bwari, Abuja. We produce, smoke, and
                package high-quality fish for distribution within Nigeria and
                for export to international markets.
              </p>
              <div className="about-highlights">
                <div className="about-highlight">
                  <FaGlobeAfrica className="about-highlight-icon" />
                  <div>
                    <h4>36+ States</h4>
                    <p>Nationwide Operations</p>
                  </div>
                </div>
                <div className="about-highlight">
                  <FaHandshake className="about-highlight-icon" />
                  <div>
                    <h4>500+ Clients</h4>
                    <p>Satisfied Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section ceo-section">
        <div className="container">
          <div className="ceo-grid">
            <div className="ceo-content">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">
                Meet Our{' '}
                <span className="text-accent">Chief Executive</span>
              </h2>
              <div className="ceo-name-badge">
                <h3>Mr. Kunle Atitebi</h3>
                <span>Chief Executive Officer</span>
              </div>
              <p>
                Mr. Kunle Atitebi is the visionary founder and Chief Executive
                of Oluku Global Services Limited. With a deep passion for
                Nigeria's development, he established the company to bridge
                gaps in the real estate and agricultural sectors.
              </p>
              <p>
                Under his leadership, Oluku Global has grown from a startup to
                a respected name in property development and aquaculture. His
                commitment to integrity, quality, and client satisfaction has
                been the driving force behind the company's success.
              </p>
              <p>
                Mr. Atitebi believes in sustainable development and continues
                to lead initiatives that create value for clients, communities,
                and the nation at large.
              </p>
              <div className="ceo-quote">
                <em>
                  "Our vision is to be a catalyst for Nigeria's growth —
                  building quality properties and producing premium food
                  products that meet global standards."
                </em>
                <span>— Mr. Kunle Atitebi</span>
              </div>
            </div>
            <div className="ceo-image-wrapper">
              <div className="ceo-image-card">
                <img
  src="/images/about/ceo.jpg"
  alt="Mr. Kunle Atitebi - CEO"
  className="about-real-img about-real-img-large"
/>
                  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading integrated services company in Nigeria,
                setting the standard for excellence in property development
                and sustainable agriculture that creates lasting value for all
                stakeholders.
              </p>
            </div>
            <div className="vm-card vm-card-accent">
              <div className="vm-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver premium property solutions and quality agricultural
                products through innovative practices, transparency, and an
                unwavering commitment to exceeding client expectations in
                every project.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <FaHeart />
              </div>
              <h3>Our Promise</h3>
              <p>
                We promise to uphold the highest standards of professionalism,
                deliver on every commitment, and build relationships founded
                on trust, respect, and mutual prosperity with all our
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">
              Our Core <span className="text-accent">Values</span>
            </h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              Company <span className="text-accent">Timeline</span>
            </h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                }`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-pattern"></div>
        <div className="container text-center">
          <h2 className="cta-title">Want to Partner With Us?</h2>
          <p className="cta-description">
            We're always looking for new partnerships and opportunities.
            Let's create something great together.
          </p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Get In Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;