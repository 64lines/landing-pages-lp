import React from 'react';
import { Container, Row, Col } from "reactstrap";
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const CompaniesList = ({ isRendered }) => {
  const data = configData.find(data => data.id === landingPage.id).companiesListConfig

  if (!isRendered || !data) {
    return (null);
  }

  return (
    <section className="section" id="companies">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{data.title}</span></h3>
            </div>
          </Col>
        </Row>
        <Row>
          {
            data.companies.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <img src={service.img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default CompaniesList;