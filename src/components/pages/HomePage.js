import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Search from '../Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/HomePage.css"

function HomePage() {
    return (
        <Container fluid className="p-0">
            <Card>
                <Card.Img
                    variant="top"
                    src="assets/images/clouds.jpg"
                />
                <Card.Body>
                    <Search />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default HomePage;
