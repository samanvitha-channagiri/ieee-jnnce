import React from "react";
import logo from '../assets/logo.jpg';
import { Container, Row, Col, Image } from "react-bootstrap";
import comingSoonImage from '../assets/homelogo/Avishkar.jpg';
function Aavishkar(){

    return(
    <Container className="text-center my-4">
        <Row className="justify-content-center">
            <Col md={6}>
                <h1 >Avishkar</h1>
                <Image 
                    src={comingSoonImage} 
                    alt="Coming Soon" 
                    className="img-fluid rounded shadow-lg" 
                />
            </Col>
        </Row>
    </Container>

    )
}
export default Aavishkar