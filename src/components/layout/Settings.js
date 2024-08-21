import { Dropdown, NavItem, NavLink, Form } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import "../../styles/Settings.css";

function Settings() {
  const { unit, setUnit, mode, setMode } = useSettings();

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
          label={unit ? "°C" : "°F"}
          checked={!unit}
          onChange={() => setUnit()}
        />
        <DropdownItem
          id="dark-mode-switch"
          label={mode ? "Light Mode" : "Dark Mode"}
          checked={mode}
          onChange={() => setMode()}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Settings;
