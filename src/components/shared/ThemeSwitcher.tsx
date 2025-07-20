"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation("navbar");
  const [mounted, setMounted] = useState(false);

  const isFa = i18n.language === "fa";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`text-sm font-medium ${isFa ? "rtl" : "ltr"}`}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="py-1 px-2 rounded-3xl w-fit transition-all duration-300 border-blue-50 bg-white border-2 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-white dark:border-gray-500 dark:bg-gray-800"
      >
        <option value="light">☀️ {t("light")}</option>
        <option value="dark">🌙 {t("dark")}</option>
        <option value="system">💻 {t("system")}</option>
      </select>
    </div>
  );
};
