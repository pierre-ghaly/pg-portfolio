import { useState } from "react";
import "../styles/ProfessionalProfiles.css";

interface ProfessionalProfile {
  id: string;
  platform: string;
  username: string;
  displayName: string;
  description: string;
  avatarUrl: string;
  profileUrl: string;
  stats: {
    label: string;
    value: number | string;
    icon?: string;
  }[];
  color: string;
  icons: {
    default: string; // Black icon for unselected state
    hover: string; // Platform color icon for hover state
    active: string; // White icon for selected state
  };
}

const profiles: ProfessionalProfile[] = [
  {
    id: "github",
    platform: "GitHub",
    username: "pierre-ghaly",
    displayName: "Pierre Ghaly",
    description: "Check out my contributions and personal projects on GitHub.",
    avatarUrl: "https://avatars.githubusercontent.com/u/37373564?v=4",
    profileUrl: "https://github.com/pierre-ghaly",
    stats: [
      { label: "Repositories", value: 8, icon: "📦" },
      { label: "Contributions", value: "200+", icon: "🧩" },
    ],
    color: "#24292e",
    icons: {
      default: "icons/github-black.svg",
      hover: "icons/github-color.svg",
      active: "icons/github-white.svg",
    },
  },
  {
    id: "stackoverflow",
    platform: "Stack Overflow",
    username: "pierre-ghaly",
    displayName: "Pierre Ghaly",
    description:
      "Explore my contributions to the developer community through questions, answers, and discussions on Stack Overflow.",
    avatarUrl: "profile.jpeg",
    profileUrl: "https://stackoverflow.com/users/6192934/pierre-ghaly",
    stats: [
      { label: "Reputation", value: "777", icon: "🏆" },
      { label: "Answers", value: 12, icon: "✅" },
      { label: "Badges", value: 29, icon: "🏅" },
      { label: "People Reach", value: "36k+", icon: "👥" },
    ],
    color: "#f48024",
    icons: {
      default: "icons/stackoverflow-black.svg",
      hover: "icons/stackoverflow-color.svg",
      active: "icons/stackoverflow-white.svg",
    },
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "pierre-ghaly",
    displayName: "Pierre Ghaly",
    description:
      "Connect with me professionally on LinkedIn to explore my career journey and professional network within the technology industry.",
    avatarUrl: "profile.jpeg",
    profileUrl: "https://linkedin.com/in/pierre-ghaly",
    stats: [{ label: "Connections", value: "2,500+", icon: "🔗" }],
    color: "#0077b5",
    icons: {
      default: "icons/linkedin-black.svg",
      hover: "icons/linkedin-color.svg",
      active: "icons/linkedin-white.svg",
    },
  },
];

const ProfessionalProfiles = () => {
  const [activeProfile, setActiveProfile] = useState<string>("github");
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);

  return (
    <section className="github-profiles" id="profiles">
      <div className="container">
        <h2 className="section-title">Professional Profiles</h2>
        <p className="section-description">
          Connect with me across different professional platforms where I
          contribute to the tech community.
        </p>

        <div className="profile-tabs">
          {profiles.map((profile) => {
            let iconSrc = profile.icons.default;
            if (activeProfile === profile.id) {
              iconSrc = profile.icons.active;
            } else if (hoveredProfile === profile.id) {
              iconSrc = profile.icons.hover;
            }

            return (
              <button
                key={profile.id}
                className={`profile-tab ${
                  activeProfile === profile.id ? "active" : ""
                }`}
                onClick={() => setActiveProfile(profile.id)}
                onMouseEnter={() => setHoveredProfile(profile.id)}
                onMouseLeave={() => setHoveredProfile(null)}
                style={
                  {
                    "--platform-color": profile.color,
                  } as React.CSSProperties
                }
              >
                <span className="platform-icon">
                  <img src={iconSrc} alt={profile.platform} />
                </span>
                <span>{profile.platform}</span>
              </button>
            );
          })}
        </div>

        <div className="profile-content">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`profile-card ${
                activeProfile === profile.id ? "active" : ""
              }`}
              style={
                {
                  "--platform-color": profile.color,
                } as React.CSSProperties
              }
            >
              <div className="profile-header">
                <img
                  src={profile.avatarUrl}
                  alt={profile.username}
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h3>{profile.displayName}</h3>
                  <span className="username">@{profile.username}</span>
                  <p className="platform-name" style={{ color: profile.color }}>
                    {profile.platform}
                  </p>
                </div>
              </div>

              <p className="profile-description">{profile.description}</p>

              <div className="profile-stats">
                {profile.stats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    {stat.icon && (
                      <span className="stat-icon">{stat.icon}</span>
                    )}
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="profile-actions">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                  style={{
                    backgroundColor: profile.color,
                    borderColor: profile.color,
                  }}
                >
                  View {profile.platform} Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfiles;
