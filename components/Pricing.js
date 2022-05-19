import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const Pricing = ({ isRendered }) => {
  const data = configData.find(data => data.id === landingPage.id).pricingConfig

  if (!isRendered || !data) {
    return (null)
  }

  return (
    <section className="section" id="signup">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{data.title}</span></h3>
              <p className="text-muted">{data.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          {data.pricing.map((plan, key) => (
            <div className="col-lg-4" key={key}>
              <div className={`card ${plan.background} mb-5 mb-lg-0 rounded-lg shadow`}>
                <div className="card-header">
                  <h5 className="card-title text-white-50 text-uppercase text-center">{plan.title}</h5>
                  <h6 className="h1 text-white text-center">${plan.price}<span className="h6 text-white-50"></span></h6>
                </div>
                <div className="card-body bg-light rounded-bottom">
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, key) => (
                      <li className="mb-3"><span className="mr-3"><i className={feature.checked ? "fas fa-check text-success" : "fas fa-check fa-times"}>{feature.checked ? "✓" : "✖️" }</i></span>{feature.name}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn-block btn-primary text-uppercase rounded-lg py-3">Buy now</a>
                </div>
              </div>
            </div>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Pricing;