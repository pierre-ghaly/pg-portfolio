import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <h2>Full Stack Developer</h2>
          <p>
            I build responsive and engaging web applications with modern
            technologies. Passionate about creating intuitive user experiences
            and clean, efficient code.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for profile image */}
          <div className="profile-image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
