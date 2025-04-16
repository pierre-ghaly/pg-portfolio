import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>
              Looking forward to connecting and discussing how we can work
              together on your next project.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="icon-email"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:pierre.ghaly@gmail.com">
                    pierre.ghaly@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="icon-linkedin"></i>
                </div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/pierre-ghaly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/pierre-ghaly
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+201275888268">+20 (127) 5888-268</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="icon-whatsapp"></i>
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <a
                    href="https://wa.me/201275888268"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
