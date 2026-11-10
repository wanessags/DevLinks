import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle"
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Modo escuro"
        onClick={onToggle}
        title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      >
        <span className="theme-toggle-thumb">
          {isDark ? (
            <FaMoon aria-hidden="true" />
          ) : (
            <FaSun aria-hidden="true" />
          )}
        </span>
      </button>
    </div>
  );
}
