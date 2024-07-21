import React, { useState } from "react";
import { Dropdown, NavItem, NavLink, Form } from "react-bootstrap";
import "../../styles/Settings.css";

function Settings() {
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [darkMode, setDarkMode] = useState(false);

  const handleTemperatureUnitChange = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const handleDarkModeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const DropdownItem = ({ id, label, checked, onChange }) => (
    <Dropdown.Item onClick={(e) => e.stopPropagation()}>
      <Form.Check
        type="switch"
        id={id}
        label={label}
        checked={checked}
        onChange={onChange}
      />
    </Dropdown.Item>
  );

  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink} className="nav-link">
        Settings
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <DropdownItem
          id="temperature-unit-switch"
          label={temperatureUnit === "C" ? "°C" : "°F"}
          checked={temperatureUnit === "F"}
          onChange={handleTemperatureUnitChange}
        />
        <DropdownItem
          id="dark-mode-switch"
          label={darkMode ? "Light Mode" : "Dark Mode"}
          checked={darkMode}
          onChange={handleDarkModeChange}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Settings;
