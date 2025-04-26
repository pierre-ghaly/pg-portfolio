import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Pierre Ghaly | Software Engineering Lead",
  description = "Pierre Ghaly - Software Engineering Lead - Portfolio showcasing my skills, projects, and experience.",
  canonical = "https://pierreghaly.github.io/pg-portfolio",
  ogType = "website",
  ogImage = "/og-image.jpg", // Make sure to add this image to your public folder
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const metaTags = {
      description: description,
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
      "og:type": ogType,
      "og:image": ogImage,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage,
    };

    // Update existing or create new meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [title, description, canonical, ogType, ogImage]);

  return null;
};

export default SEO;
