import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const socialNetworks = [
  { name: "GitHub", Icon: FaGithub },
  { name: "Instagram", Icon: FaInstagram },
  { name: "YouTube", Icon: FaYoutube },
  { name: "LinkedIn", Icon: FaLinkedin },
];

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociais">
      {socialNetworks.map(({ name, Icon }) => (
        <span
          className="social-icon"
          role="img"
          aria-label={name}
          title={name}
          key={name}
        >
          <Icon aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
