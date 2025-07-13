import { Code, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-4 sm:px-6 md:px-10 py-3 flex justify-between items-center bg-white text-black/90 dark:text-white dark:bg-zinc-800 border-b border-gray-300 dark:border-zinc-700">
      <div className="flex gap-x-2 items-center">
      <Code color={theme === "dark" ? "white" : "black"} strokeWidth={3} />
      <h1 className="text-lg sm:text-2xl font-bold">TechQuizz</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div
          title={theme === "light" ? "Switch to Dark" : "Switch to Light"}
          onClick={toggleTheme}
          className="border border-gray-300 dark:border-zinc-500 p-2 rounded-md cursor-pointer transition-colors"
        >
          {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
