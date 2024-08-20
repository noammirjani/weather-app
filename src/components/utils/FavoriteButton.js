import { Button } from "react-bootstrap";
import Icon from "../utils/Icon";
import { favoriteSvg, favoriteSvgFill } from "../../utils/svgPath";
import "../../styles/FavoriteButton.css";
import useFavorites from "../../hooks/useFavorites";

function FavoriteButton({ locationData }) {
  const { updateFavorites, isFave } = useFavorites();

  const handleSave = () => {
    updateFavorites(locationData, !isFave(locationData.key));
  };

  return (
    <Button onClick={handleSave} className="svgButton">
      <Icon
        size="30"
        svgData={isFave(locationData.key) ? favoriteSvgFill : favoriteSvg}
        color="red"
      />
    </Button>
  );
}

export default FavoriteButton;
