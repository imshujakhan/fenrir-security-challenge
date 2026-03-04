import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] hover:bg-gray-200 dark:hover:bg-[#0F0F0F] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun size={20} className="text-yellow-500" /> : <FiMoon size={20} className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;
