import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaFish,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from 'react-icons/fa';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  

  // All gallery images — just change the file names to match yours
  const galleryItems = [
    {
      category: 'property',
      title: 'Luxury Estate Front View',
      description: 'Modern residential estate in Bwari, Abuja',
      image: '/images/gallery/luxury-estate.jpg',
    },

    {
    category: 'fish',
    title: 'Fish Pond Tour (Video)',
    description: 'Watch our fish farm facility in action',
    image: '/images/gallery/fish-pond.jpg',
    isVideo: true,
    videoSrc: '/videos/fish-pond.mp4',
  },

    
    {
      category: 'property',
      title: 'Commercial Building',
      description: 'Multi-story commercial development',
      image: '/images/gallery/commercial-building.jpg',
    },
    {
      category: 'fish',
      title: 'Fresh Catfish Harvest',
      description: 'Premium quality catfish from our farm',
      image: '/images/gallery/catfish-harvest.jpg',
    },
    {
      category: 'property',
      title: 'Estate Development',
      description: 'Housing estate under construction',
      image: '/images/gallery/estate-development.jpg',
    },
    {
      category: 'fish',
      title: 'Smoked Fish Products',
      description: 'Professionally smoked and packaged fish',
      image: '/images/gallery/smoked-fish.jpg',
    },
    {
      category: 'property',
      title: 'Duplex Interior',
      description: 'Premium interior finishing of our duplexes',
      image: '/images/gallery/duplex-interior.jpg',
    },
    {
      category: 'fish',
      title: 'Fingerling Supply',
      description: 'Quality fingerlings ready for distribution',
      image: '/images/gallery/fingerling-supply.jpg',
    },
    {
      category: 'property',
      title: 'Land Survey',
      description: 'Land survey and acquisition across states',
      image: '/images/gallery/land-survey.jpg',
    },
    {
      category: 'fish',
      title: 'Distribution',
      description: 'Fish products ready for nationwide delivery',
      image: '/images/gallery/distribution.jpg',
    },
    {
      category: 'property',
      title: 'Head Office',
      description: 'Our office at Kuduru, Bwari-Abuja',
      image: '/images/gallery/head-office.jpg',
    },
    {
      category: 'fish',
      title: 'Farm Aerial View',
      description: "Bird's eye view of our fish farm in Kuchiko",
      image: '/images/gallery/farm-aerial.jpg',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-pattern"></div>
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-label">Our Work</span>
            <h1 className="page-header-title">Gallery</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Visual Portfolio</span>
            <h2 className="section-title">
              Our <span className="text-accent">Gallery</span>
            </h2>
            <p className="section-subtitle">
              Take a visual tour of our projects, facilities, and products.
            </p>
          </div>

          {/* Filter */}
          <div className="project-filters">
            <button
              className={`filter-btn ${
                activeFilter === 'all' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`filter-btn ${
                activeFilter === 'property' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('property')}
            >
              <FaBuilding /> Properties
            </button>
            <button
              className={`filter-btn ${
                activeFilter === 'fish' ? 'filter-btn-active' : ''
              }`}
              onClick={() => setActiveFilter('fish')}
            >
              <FaFish /> Fish Farm
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
  <div
    key={index}
    className={`gallery-item ${item.isVideo ? 'gallery-item-video' : ''}`}
    onClick={() => openLightbox(index)}
  >
    {item.isVideo ? (
      <div className="gallery-video-thumb">
        <img
          src={item.image}
          alt={item.title}
          className="gallery-item-img"
          loading="lazy"
        />
        <div className="gallery-play-btn">
          <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    ) : (
      <img
        src={item.image}
        alt={item.title}
        className="gallery-item-img"
        loading="lazy"
      />
    )}
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="gallery-item-expand">
                    <FaExpand />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[currentImage]?.image}
              alt={filteredItems[currentImage]?.title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <h3>{filteredItems[currentImage]?.title}</h3>
              <p>{filteredItems[currentImage]?.description}</p>
              <span>
                {currentImage + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-pattern"></div>
        <div className="container text-center">
          <h2 className="cta-title">Like What You See?</h2>
          <p className="cta-description">
            Let us build something amazing for you too. Reach out today!
          </p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Gallery;