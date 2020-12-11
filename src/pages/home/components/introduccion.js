import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


import imagenBebe from "../../../img/img1.jpg";
import Carousel from "react-bootstrap/Carousel";
import bebe1 from "../../../img/bebe1.jpg";
import bebe2 from "../../../img/bebe2.jpg";
import bebe3 from "../../../img/bebe3.jpg";


const div = {
    width: "20vw",
    borderRadius: "10vw",
  };
  
  const introduccion = () => {
    return (
      <Container fluid>
        <Jumbotron>
          <img src={imagenBebe} style={div} />
  
          <h2>Fotos de bebes actividad victor</h2>
        </Jumbotron>
        <Carousel>
          <Carousel.Item>
            <img src={bebe1} alt="First slide" width="400" height="600" />
            <Carousel.Caption>
              <h3>Baby  1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bebe2} alt="Third slide" width="400" height="600" />
  
            <Carousel.Caption>
              <h3>Baby 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bebe3} alt="Third slide" width="400" height="600" />
  
            <Carousel.Caption>
              <h3>Baby 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  };
  
  export default introduccion;