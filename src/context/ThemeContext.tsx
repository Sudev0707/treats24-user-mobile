import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Children,
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

type ThemeContextType = {
  theme: ColorSchemeName;
  setTheme: (theme: ColorSchemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
type ProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme() || 'light',
  );

  useEffect(() => {
    const listner = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || 'light');
    });

    return () => listner.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
};
