import { useEffect, useState } from "react";

import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import LinkButton from "./components/LinkButton";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

import { links } from "./data/links";

import "./App.css";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "devlinks-theme";

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Mantém o tema padrão caso o
    // armazenamento não esteja disponível.
  }

  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // A troca de tema continua funcionando
      // mesmo sem persistência.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <main className="app" data-theme={theme}>
      <div className="container">
        <Profile />

        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <section className="links" aria-label="Meus links">
          {links.map((link) => (
            <LinkButton key={link.id} title={link.title} url={link.url} />
          ))}
        </section>

        <SocialLinks />

        <Footer />
      </div>
    </main>
  );
}
