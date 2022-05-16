import React from 'react';
import { Container, Row, Col } from "reactstrap";
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const SpeakerList = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) => (
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
        </Row>
      ))
    }
    </>
  );
}

const Speakers = ({ isRendered }) => {
  const data = configData.find(data => data.id === landingPage.id).speakersConfig

  if (!isRendered || !data) {
    return (null);
  }
  
  return (
    <section className="section" id="speakers">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{ data.title }</span></h3>
              <p className="text-muted">{data.description}</p>
            </div>
          </Col>
        </Row>
        <SpeakerList features={data.speakers} />
      </Container>
    </section>
  );
}

export default Speakers;
