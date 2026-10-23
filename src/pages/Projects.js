import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaFish,
  FaHome,
  FaIndustry,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      category: 'property',
      title: 'Luxury Estate Development',
      location: 'Bwari, Abuja',
      status: 'Completed',
      description:
        'Development of a 20-unit luxury residential estate with modern amenities and premium finishing.',
      icon: <FaHome />,
    },
    {
      category: 'fish',
      title: 'Catfish Production Farm',
      location: 'Kuchiko, Bwari',
      status: 'Active',
      description:
        'State-of-the-art catfish farming facility with 50+ ponds producing premium quality catfish year-round.',
      icon: <FaFish />,
    },
    {
      category: 'property',
      title: 'Commercial Plaza',
      location: 'Kubwa, Abuja',
      status: 'Completed',
      description:
        'Multi-story commercial plaza with office spaces, retail shops, and ample parking facilities.',
      icon: <FaIndustry />,
    },
    {
      category: 'fish',
      title: 'Smoked Fish Processing',
      location: 'Kuchiko, Bwari',
      status: 'Active',
      description:
        'Modern fish processing and packaging unit for smoked fish products distributed locally and internationally.',
      icon: <FaFish />,
    },
    {
      category: 'property',
      title: 'Residential Duplexes',
      location: 'Gwagwalada, Abuja',
      status: 'Completed',
      description:
        'Construction of 10 units of 4-bedroom detached duplexes with boys quarters and modern finishing.',
      icon: <FaHome />,
    },
    {
      category: 'property',
      title: 'Land Acquisition Project',
      location: 'Multiple States',
      status: 'Ongoing',
      description:
        'Strategic acquisition of prime land parcels across Lagos, Ogun, Enugu, and Kaduna states.',
      icon: <FaBuilding />,
    },
    {
      category: 'fish',
      title: 'Tilapia Farming Unit',
      location: 'Kuchiko, Bwari',
      status: 'Active',
      description:
        'Dedicated tilapia production unit utilizing modern aquaculture techniques for premium quality fish.',
      icon: <FaFish />,
    },
    {
      category: 'property',
      title: 'Housing Estate Development',
      location: 'Kuje, Abuja',
      status: 'In Progress',
      description:
        'Large-scale housing estate with 50 units of various house types, recreational facilities, and infrastructure.',
      icon: <FaHome />,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'Active':
        return 'status-active';
      case 'Ongoing':
      case 'In Progress':
        return 'status-ongoing';
      default:
        return '';
    }
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-pattern"></div>
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-label">Our Portfolio</span>
            <h1 className="page-header-title">Projects</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Our <span className="text-accent">Projects</span>
            </h2>
            <p className="section-subtitle">
              Explore our portfolio of successfully completed and ongoing
              projects across Nigeria.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="project-filters">
            <button
              className={`filter-btn ${
                activeFilter === 'all' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${
                activeFilter === 'property' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('property')}
            >
              <FaBuilding /> Property
            </button>
            <button
              className={`filter-btn ${
                activeFilter === 'fish' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('fish')}
            >
              <FaFish /> Fish Farming
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div
                  className={`project-card-image ${
                    project.category === 'fish'
                      ? 'project-card-image-fish'
                      : 'project-card-image-property'
                  }`}
                >
                  <div className="project-card-icon">{project.icon}</div>
                  <span
                    className={`project-status ${getStatusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="project-card-body">
                  <div className="project-card-category">
                    {project.category === 'property'
                      ? 'Property Development'
                      : 'Fish Farming'}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-location">
                    <FaMapMarkerAlt /> {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-pattern"></div>
        <div className="container text-center">
          <h2 className="cta-title">Have a Project in Mind?</h2>
          <p className="cta-description">
            Let's discuss how we can bring your vision to life. Contact us
            for a free project consultation.
          </p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;