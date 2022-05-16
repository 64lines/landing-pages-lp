import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const FAQ = ({ isRendered }) => {
  const data = configData.find(data => data.id === landingPage.id).faqConfig

  if (!isRendered || !data) {
    return (null)
  }

  return (
    <section className="section" id="faq">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">{data.title}</span></h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={8}>
            <ListGroup>
              {data.questions.map((question, key) => (
                <ListGroupItem key={key}>
                  <ListGroupItemHeading>{question.question}</ListGroupItemHeading>
                  <ListGroupItemText>{question.answer}</ListGroupItemText>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default FAQ;