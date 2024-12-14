/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const darkTheme = () => {
    if (theme) {
      document.querySelector("#root").setAttribute("class", "dark");
    } else {
      document.querySelector("#root").setAttribute("class", "");
    }
  };

  const toggle = () => setTheme(!theme);
  darkTheme();
  return (
    <ThemeContext.Provider value={{ toggle }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
