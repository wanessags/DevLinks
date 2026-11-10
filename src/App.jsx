import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import LinkButton from "./components/LinkButton";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { links } from "./data/links";

import "./App.css";

export default function App() {
  return (
    <main className="app">
      <div className="container">
        <Profile />

        <ThemeToggle />

        <section className="links" aria-label="Meus links">
          {links.map((link) => (
            <LinkButton key={link.id} title={link.title} />
          ))}
        </section>

        <SocialLinks />

        <Footer />
      </div>
    </main>
  );
}
