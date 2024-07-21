import { useState } from "react";
import { Button } from "react-bootstrap";
import Icon from "../utils/Icon";
import { favoriteSvg, favoriteSvgFill } from "../../utils/svgPath";
import "../../styles/FavoriteButton.css";
import useFavorites from "../../hooks/useFavorites";

function FavoriteButton({ locationData }) {
  const { updateFavorites, isFave } = useFavorites();
  const [saveLocation, setSaveLocation] = useState(isFave(locationData.key));

  const handleSave = () => {
    setSaveLocation((prev) => !prev);
    updateFavorites(locationData, !saveLocation);
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
