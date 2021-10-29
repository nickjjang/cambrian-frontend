import { useThemeManager } from "../state/user/hooks";

const useTheme = () => {
  const [isDark, toggleTheme] = useThemeManager();
  return { isDark, toggleTheme };
};

export default useTheme;
