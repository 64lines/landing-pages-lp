import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const Hero = () => {
  const data = configData.find(data => data.id === landingPage.id).heroConfig

  if (!data) {
    return (null)
  }

  return (
    <section className="section position-relative" style={{backgroundImage: `url(${data.backgroundImage})`, backgroundSize: "cover"}}>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">#{ data.title }</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">{ data.title }</h1>
              <p className="text-muted mb-4 pb-2">{ data.description }</p>
              <a href="#" className="btn btn-warning">
                {data.buttonText}<span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;