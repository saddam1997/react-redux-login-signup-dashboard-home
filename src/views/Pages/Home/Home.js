import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Card, CardBody, CardGroup, Col, Container,history, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Home extends Component {
  constructor() {
    super();
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectRegister = this.redirectRegister.bind(this);
  }
  redirectLogin(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }
  redirectRegister(e) {
    e.preventDefault();
    this.props.history.push('/register');
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className=" py-5 d-md-down-none">
                  <CardBody>
                    <div>
                      <h2>Sign In</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" onClick={this.redirectLogin} active>Login Now!</Button>
                    </div>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" onClick={this.redirectRegister} active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
