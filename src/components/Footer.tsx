import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Pierre Ghaly</h3>
            <p>Software Engineering Lead</p>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/pierre-ghaly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="footer-icon linkedin"></i>
            </a>
            <a
              href="https://github.com/pierre-ghaly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="footer-icon github"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/123456/pierre-ghaly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
            >
              <i className="footer-icon stackoverflow"></i>
            </a>
            <a
              href="https://wa.me/201275888268"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="footer-icon whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Pierre Ghaly. All rights reserved.</p>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
