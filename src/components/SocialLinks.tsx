import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import type { IconType } from "react-icons";

interface SocialNetwork {
  name: string;
  url: string;
  Icon: IconType;
}

const socialNetworks: SocialNetwork[] = [
  {
    name: "GitHub",
    url: "https://github.com/wanessags",
    Icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/wanessagss_",
    Icon: FaInstagram,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    Icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/Wanessa-Goncalves",
    Icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Redes sociais">
      {socialNetworks.map(({ name, url, Icon }) => (
        <a
          key={name}
          className="social-icon"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} (abre em uma nova aba)`}
          title={name}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
