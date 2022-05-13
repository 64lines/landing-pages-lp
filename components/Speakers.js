import React from 'react';
import { Container, Row, Col } from "reactstrap";

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

  const speakers = [
    {id : 1, img : "./images/woman1.jpeg", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
    {id : 2, img : "./images/man1.jpeg", title : "LOREM IPSUM", desc : "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", link : "/"},
    {id : 3, img : "./images/woman2.jpeg", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
    {id : 3, img : "./images/man2.jpeg", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
    {id : 3, img : "./images/woman3.jpeg", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
  ];

  if (!isRendered) {
    return (null);
  }
  
  return (
    <section className="section" id="speakers">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Speakers</span></h3>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <SpeakerList features={speakers} />
      </Container>
    </section>
  );
}

export default Speakers;
