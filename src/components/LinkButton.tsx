interface LinkButtonProps {
  title: string;
  url: string;
}

export default function LinkButton({ title, url }: LinkButtonProps) {
  return (
    <a
      className="link-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} (abre em uma nova aba)`}
    >
      {title}
    </a>
  );
}
