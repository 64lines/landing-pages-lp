import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import configData from '../config/data.json';
import landingPage from '../config/landingpage.json';

const SignUpForm = ({ isRendered }) => {
  const data = configData.find(data => data.id === landingPage.id).signUpFormConfig

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
          <Col lg={12} md={8}>
            <Form>
              <FormGroup>
                <Label for="Name">Full name</Label>
                <Input type="fullname" name="fullname" id="full-name" placeholder="Your full name" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your e-mail" />
              </FormGroup>
              <Button>Register</Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default SignUpForm;