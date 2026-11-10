interface LinkButtonProps {
  title: string;
}

export default function LinkButton({ title }: LinkButtonProps) {
  return (
    <button className="link-button" type="button">
      {title}
    </button>
  );
}
