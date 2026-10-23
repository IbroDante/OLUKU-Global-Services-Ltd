import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFish,
  FaMapMarkedAlt,
  FaFileContract,
  FaHardHat,
  FaHome,
  FaIndustry,
  FaWarehouse,
  FaSeedling,
  FaWater,
  FaBox,
  FaShippingFast,
  FaGlobeAmericas,
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
} from 'react-icons/fa';

const Services = () => {
  const propertyServices = [
    {
      icon: <FaMapMarkedAlt />,
      title: 'Land Acquisition',
      description:
        'Strategic identification and acquisition of prime land across all 36 states and the FCT. We handle surveying, verification, and complete documentation.',
      features: [
        'Nationwide coverage',
        'Title verification',
        'Land surveying',
        'Legal documentation',
      ],
    },
    {
      icon: <FaHardHat />,
      title: 'Property Development',
      description:
        'Full-scale construction and development services from architectural design through to project completion with quality finishing.',
      features: [
        'Architectural design',
        'Construction management',
        'Quality assurance',
        'Timely delivery',
      ],
    },
    {
      icon: <FaHome />,
      title: 'Residential Properties',
      description:
        'Development of modern residential homes, duplexes, apartments, and housing estates that meet contemporary living standards.',
      features: [
        'Detached houses',
        'Semi-detached homes',
        'Apartment complexes',
        'Estate development',
      ],
    },
    {
      icon: <FaIndustry />,
      title: 'Commercial Properties',
      description:
        'Construction of offices, shopping complexes, warehouses, and commercial buildings designed for business success.',
      features: [
        'Office complexes',
        'Shopping centers',
        'Warehouse facilities',
        'Mixed-use buildings',
      ],
    },
    {
      icon: <FaFileContract />,
      title: 'Property Consultation',
      description:
        'Expert advisory services on property investment, market analysis, valuation, and portfolio management.',
      features: [
        'Market analysis',
        'Investment advisory',
        'Property valuation',
        'Portfolio management',
      ],
    },
    {
      icon: <FaWarehouse />,
      title: 'Facility Management',
      description:
        'Post-construction maintenance and management services to preserve property value and ensure optimal functionality.',
      features: [
        'Maintenance services',
        'Tenant management',
        'Property inspection',
        'Value preservation',
      ],
    },
  ];

  const fishServices = [
    {
      icon: <FaFish />,
      title: 'Fish Farming',
      description:
        'Modern aquaculture production at our state-of-the-art facility in Kuchiko, Bwari, Abuja. We raise healthy fish using best practices.',
      features: [
        'Catfish production',
        'Tilapia farming',
        'Quality feed program',
        'Health monitoring',
      ],
    },
    {
      icon: <FaSeedling />,
      title: 'Fingerling Supply',
      description:
        'Supply of quality fingerlings and juveniles for aspiring fish farmers looking to start or expand their aquaculture operations.',
      features: [
        'Quality fingerlings',
        'Technical guidance',
        'Bulk supply',
        'Delivery available',
      ],
    },
    {
      icon: <FaWater />,
      title: 'Pond Management',
      description:
        'Comprehensive pond setup, water quality management, and fish health consulting for optimal production outcomes.',
      features: [
        'Pond construction',
        'Water quality testing',
        'Fish health management',
        'Production optimization',
      ],
    },
    {
      icon: <FaBox />,
      title: 'Fish Processing',
      description:
        'Professional smoking, drying, and packaging of fish products using hygienic processes that meet quality standards.',
      features: [
        'Smoking & drying',
        'Hygienic processing',
        'Quality packaging',
        'Shelf-life optimization',
      ],
    },
    {
      icon: <FaShippingFast />,
      title: 'Local Distribution',
      description:
        'Reliable distribution of fresh and processed fish products across Nigeria with cold chain logistics support.',
      features: [
        'Nationwide delivery',
        'Cold chain logistics',
        'Bulk orders',
        'Regular supply schedules',
      ],
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Export Services',
      description:
        'International export of premium smoked and packaged fish products meeting international food safety standards.',
      features: [
        'Export documentation',
        'Quality certification',
        'International shipping',
        'Market access support',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description:
        'We begin with understanding your needs through detailed consultation and requirement analysis.',
    },
    {
      step: '02',
      title: 'Planning',
      description:
        'Our team develops a comprehensive plan, timeline, and budget tailored to your specific project.',
    },
    {
      step: '03',
      title: 'Execution',
      description:
        'We implement with precision, maintaining quality standards and keeping you updated throughout.',
    },
    {
      step: '04',
      title: 'Delivery',
      description:
        'We deliver on time and provide after-service support to ensure complete satisfaction.',
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header page-header-services">
        <div className="page-header-overlay"></div>
        <div className="page-header-pattern"></div>
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-label">What We Offer</span>
            <h1 className="page-header-title">Our Services</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Services */}
      <section className="section property-services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Real Estate</span>
            <h2 className="section-title">
              Property Acquisition &{' '}
              <span className="text-accent">Development</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive real estate solutions across all states in Nigeria.
              From land acquisition to property development, we've got you
              covered.
            </p>
          </div>
          <div className="services-detail-grid">
            {propertyServices.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-detail-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fish Services */}
      <section className="section fish-services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Agriculture</span>
            <h2 className="section-title">
              Fish Farming &{' '}
              <span className="text-accent">Production</span>
            </h2>
            <p className="section-subtitle">
              Premium fish farming, processing, and distribution services from
              our facility in Bwari, Abuja — delivering quality products
              locally and internationally.
            </p>
          </div>
          <div className="services-detail-grid">
            {fishServices.map((service, index) => (
              <div key={index} className="service-detail-card service-detail-card-alt">
                <div className="service-detail-icon service-detail-icon-alt">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-detail-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">
              Our <span className="text-accent">Process</span>
            </h2>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {index < process.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-pattern"></div>
        <div className="container text-center">
          <h2 className="cta-title">Need Our Services?</h2>
          <p className="cta-description">
            Get in touch today for a free consultation. Let us help you bring
            your project to life.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white btn-lg">
              Request a Quote <FaArrowRight />
            </Link>
            <a href="tel:08025551994" className="btn btn-outline-white btn-lg">
              <FaPhoneAlt /> 080-2555-1994
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;