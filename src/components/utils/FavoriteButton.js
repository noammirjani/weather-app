import { useState } from "react";
import { Button } from "react-bootstrap";
import Icon from "../utils/Icon";
import { favoriteSvg, favoriteSvgFill } from "../../utils/svgPath";
import "../../styles/FavoriteButton.css";

function FavoriteButton({ locationData }) {
  const [saveLocation, setSaveLocation] = useState(false);

  const handleSave = () => {
    setSaveLocation((prev) => !prev);
    //set location data to context
  };

  return (
    <Button onClick={handleSave} className="svgButton">
      <Icon
        size="30"
        svgData={saveLocation ? favoriteSvgFill : favoriteSvg}
        color="red"
        onClick={handleSave}
      />
    </Button>
  );
}

export default FavoriteButton;
