const socialNetworks = ["GitHub", "Instagram", "YouTube", "LinkedIn"];

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Redes sociais">
      {socialNetworks.map((network) => (
        <span className="social-placeholder" key={network}>
          {network}
        </span>
      ))}
    </nav>
  );
}
