import LanguageSwitcher from "@/components/shared/Language/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 sticky top-0 bg-white dark:bg-black">
      <span className="uppercase font-black max-md:text-sm">Next Base</span>
      <div className="flex justify-center items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
