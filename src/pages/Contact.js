import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaUser,
  FaBuilding,
  FaPen,
  FaCheckCircle,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // WhatsApp phone number (without + or spaces, with country code)
  const whatsappNumber = '2348025551994';

  // Format the message
  const message = `*NEW INQUIRY FROM WEBSITE*%0A%0A` +
    `*Name:* ${formData.name}%0A` +
    `*Email:* ${formData.email}%0A` +
    `*Phone:* ${formData.phone}%0A` +
    `*Service Interested In:* ${formData.service || 'Not specified'}%0A` +
    `*Subject:* ${formData.subject || 'General Inquiry'}%0A%0A` +
    `*Message:*%0A${formData.message}%0A%0A` +
    `_Sent via Oluku Global Services Website_`;

  // Create WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank');

  // Show success message
  setSubmitted(true);

  // Reset form after 5 seconds
  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: '',
    });
  }, 5000);
};

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Head Office',
      details: [
        'No. 1, Road 3, Zone \'C\'',
        'Besides Inuwa Hotel, Kuduru',
        'Bwari-Abuja, Nigeria',
      ],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Farm Address',
      details: [
        'Km 4, Along Nigerian Law School',
        'Kuchiko, Bwari',
        'Abuja, Nigeria',
      ],
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: ['080-2555-1994'],
      link: 'tel:08025551994',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['oluku.globalservices@gmail.com'],
      link: 'mailto:oluku.globalservices@gmail.com',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      details: ['080-2555-1994'],
      link: 'https://wa.me/2348025551994',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 3:00 PM'],
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
            <span className="page-header-label">Get In Touch</span>
            <h1 className="page-header-title">Contact Us</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                {item.details.map((detail, i) => (
                  <p key={i}>
                    {item.link && i === 0 ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.link.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <span className="section-label">Send Us a Message</span>
              <h2 className="section-title">
                Get a Free <span className="text-accent">Consultation</span>
              </h2>
              <p>
                Fill out the form below and our team will get back to you
                within 24 hours. We're here to help with all your property and
                fish farming needs.
              </p>

              {submitted ? (
  <div className="form-success">
    <FaCheckCircle className="form-success-icon" />
    <h3>Redirecting to WhatsApp...</h3>
    <p>
      Your message has been prepared. A WhatsApp chat window has opened —
      please click <strong>Send</strong> to complete your inquiry.
      We'll respond within 24 hours!
    </p>
    <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#25d366' }}>
      <strong>📱 WhatsApp: 080-2555-1994</strong>
    </p>
  </div>
) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <FaUser /> Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <FaEnvelope /> Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <FaPhone /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">
                        <FaBuilding /> Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="property-acquisition">
                          Property Acquisition
                        </option>
                        <option value="property-development">
                          Property Development
                        </option>
                        <option value="fish-farming">Fish Farming</option>
                        <option value="fish-processing">
                          Fish Processing & Packaging
                        </option>
                        <option value="distribution">Distribution</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaPen /> Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      <FaPen /> Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
  <FaWhatsapp /> Send via WhatsApp
</button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="contact-map-wrapper">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31523.89!2d7.35!3d9.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1a0d0d0d0d%3A0x0!2sBwari%2C+Abuja!5e0!3m2!1sen!2sng!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oluku Global Services Location"
                ></iframe>
              </div>
              <div className="map-info-card">
                <h4>Visit Our Office</h4>
                <p>
                  <FaMapMarkerAlt /> No. 1, Road 3, Zone 'C', Besides Inuwa
                  Hotel, Kuduru, Bwari-Abuja
                </p>
                <p>
                  <FaClock /> Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <a
                  href="https://maps.google.com/?q=Bwari+Abuja+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;