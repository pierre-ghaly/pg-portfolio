import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <h2>Software Engineer Lead</h2>
          <p style={{ textAlign: "left" }}>
            Innovative Software Engineering Leader with 8+ years of experience
            architecting enterprise-scale applications and leading
            cross-functional development teams.<br></br>Proven expertise in
            designing service-oriented architectures using Angular, React,
            Next.js, REST APIs, GraphQL, .NET, Node.js frameworks and Blockchain
            development using Solidity, and Web3.js - coupled with cloud-native
            AWS infrastructure.<br></br>Successfully led 8-developer team
            implementing Dynamics 365 CRM solutions for government entities and
            spearheaded technical architecture decisions.<br></br>Track record
            of delivering mission-critical projects including $20M+ investment
            platform and hospitality management system handling 500+ daily
            transaction.<br></br>
            Advanced education including MSc in Blockchain and Digital
            Currencies with ongoing PhD research, combining technical depth with
            strategic leadership to drive organizational excellence and
            technological transformation.
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
          <div className="profile-image-placeholder">
            <img src={"profile.jpeg"} alt="Pierre Ghaly" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
