import { createContext, useState, useEffect } from "react";

export const settingsContext = createContext(null);

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    // true == celsius, false == fahrenheit
    unit: true,
    // true == dark mode, false == light mode
    mode: false,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", settings.mode);
  }, [settings.mode]);

  const setUnit = () => {
    setSettings((prev) => ({ ...prev, unit: !prev.unit }));
  };

  const setMode = () => {
    setSettings((prev) => ({ ...prev, mode: !prev.mode }));
  };

  return (
    <settingsContext.Provider
      value={{ unit: settings.unit, setUnit, mode: settings.mode, setMode }}
    >
      {children}
    </settingsContext.Provider>
  );
}

export default SettingsProvider;
