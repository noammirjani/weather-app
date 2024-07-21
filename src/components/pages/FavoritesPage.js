import Layout from "../layout/Layout";
import useFavorites from "../../hooks/useFavorites";
import FavoriteButton from "../utils/FavoriteButton";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../styles/FavoritesPage.css";

function FavoritesPage() {
  const { favorites } = useFavorites();
  const filterFavorites = Object.values(favorites).filter(
    (location) => location.display
  );

  const searchWeather = (locationData) => {
    console.log("search", locationData);
  };

  console.log(filterFavorites);

  return (
    <>
      <Layout />
      <Container className="favorites-container">
        {filterFavorites.length === 0 ? (
          <div className="no-favorites">
            <h2>No locations were chosen as favorites yet...</h2>
            <p>
              Please go back to the search page and choose a location to add to
              favorites.
            </p>
          </div>
        ) : (
          <Row>
            {filterFavorites.map((location) => (
              <Col xs={12} sm={6} md={3} key={location.data.key}>
                <div className="favorite-card">
                  <h3>{location.data.city}</h3>
                  <p>{location.data.country}</p>
                  <FavoriteButton
                    locationData={location.data}
                    display={location.display}
                  />
                  <Button
                    variant="outline-primary"
                    onClick={() => searchWeather(location.data)}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default FavoritesPage;
