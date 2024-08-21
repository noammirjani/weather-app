import Layout from "../layout/Layout";
import useFavorites from "../../hooks/useFavorites";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/FavoritesPage.css";
import BasicWeather from "../weatherDisplay/BasicWeather";
import MessageDisplay from "../utils/MessageDisplay";

function FavoritesPage() {
  const { favorites } = useFavorites();
  const filterFavorites = Object.values(favorites).filter(
    (location) => location.display
  );

  return (
    <>
      <Layout />
      <Container className="favorites-container">
        {filterFavorites.length === 0 ? (
          <MessageDisplay variant="info" className="no-favorites">
            <h2>No locations were chosen as favorites yet...</h2>
            <h4 className="text-secondary">
              Please go back to the search page and choose a location to add to
              favorites.
            </h4>
          </MessageDisplay>
        ) : (
          <Row>
            {filterFavorites.map((location) => (
              <Col xs={12} sm={6} md={3} key={location.data.key}>
                <BasicWeather location={location.data} extra={false} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default FavoritesPage;
