export default function Profile() {
  return (
    <header className="profile">
      <img
        className="avatar"
        src="/images/perfil.jpg"
        alt="Minha foto de perfil"
        width={112}
        height={112}
      />

      <p className="username">@seu.perfil</p>
    </header>
  );
}
