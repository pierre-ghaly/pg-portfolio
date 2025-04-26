import { useEffect } from "react";

const JsonLd = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Pierre Ghaly",
      jobTitle: "Software Engineering Lead",
      url: "https://pierreghaly.github.io/pg-portfolio/",
      sameAs: [
        // Add your LinkedIn, GitHub, etc. URLs here
        "https://github.com/PierreGhaly",
        // 'https://linkedin.com/in/your-profile',
      ],
      knowsAbout: [
        "Software Development",
        "Web Development",
        "React",
        "TypeScript",
        "JavaScript",
      ],
    };

    // Create or update JSON-LD script tag
    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }

    scriptTag.textContent = JSON.stringify(schema);
  }, []);

  return null;
};

export default JsonLd;
