import { useState } from "react";
import "../style/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const mailtoLink = `mailto:mhdizmrfarhan@email.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  }

  const contactLinks = [
    {
      label: "EMAIL",
      value: "mhdizmrfarhan@email.com",
      href: "mailto:mhdizmrfarhan@email.com",
    },
    {
      label: "PHONE",
      value: "+60 11-623 1651",
      href: "tel:+601162316510",
    },
    {
      label: "GITHUB",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      external: true,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/farhan-kamal",
      href: "https://www.linkedin.com/in/farhan-kamal-98b96a242/",
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-bg"   aria-hidden="true" />
      <div className="contact-scanlines" aria-hidden="true" />

      <div className="contact-inner">
        {/* header */}
        <div className="contact-header">
          <div className="contact-label">[ CONTACT_INIT ]</div>
          <h2 className="contact-title">
            Get In <span className="contact-accent">Touch</span>
          </h2>
          <div className="contact-title-line" />
        </div>

        {/* two-column layout */}
        <div className="contact-container">

          {/* LEFT — info */}
          <div className="contact-left">
            <p className="contact-desc">
              Interested in working together or have a question?<br />
              Feel free to reach out through any channel below.
            </p>

            <ul className="contact-info">
              {contactLinks.map((item, i) => (
                <li key={i} className="contact-info-item">
                  {/* corner brackets */}
                  <div className="ci-corner tl" />
                  <div className="ci-corner br" />

                  <span className="ci-label">{item.label}</span>
                  <a
                    href={item.href}
                    className="ci-value"
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — form */}
          <div className="contact-right">
            <div className="contact-form-wrap">
              <div className="cf-corner tl" />
              <div className="cf-corner tr" />
              <div className="cf-corner bl" />
              <div className="cf-corner br" />

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="cf-field">
                  <label className="cf-label">YOUR_NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Ahmad Farhan"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cf-field">
                  <label className="cf-label">YOUR_EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. farhan@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cf-field">
                  <label className="cf-label">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="cf-field">
                  <label className="cf-label">MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="cf-submit">
                  SEND_MESSAGE →
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;