import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";
import NormalTheme from "../styles/theme/NormalTheme";

const ThemeValueContext = createContext();

export default function ThemeValueProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", NormalTheme);

  return (
    <ThemeValueContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeValueContext.Provider>
  );
}

export function useThemeValueContext() {
  const context = useContext(ThemeValueContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
