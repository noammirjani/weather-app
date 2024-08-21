import { useContext } from "react";
import { settingsContext } from "../context/SettingsContext";

function useSettings() {
  return useContext(settingsContext);
}

export default useSettings;
