import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

export const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};
export default ThemeToggle;
// Note: We're using named export here (export const ThemeToggle)
// instead of default export