import React from 'react';

export default function Contact() {
  return (
    <section>
    <h1 data-testid='h1tag' className="contact">contact me</h1>

    <div className="contact-icons">
    <Row>
        <Col lg={3} md={12}>
        <a href="mailto:erinjordan2790@gmail.com"><img src="./images/email.png" alt="Email"></img></a>
        <a href="tel:8104447591"><img src="./images/cellphone.png" alt="Phone"></img></a>
        <a href="https://www.linkedin.com/in/erin-jordan-6b58a51a0/"><img src="./images/linkedin.png" alt="LinkedIn"></img></a>
        <a href="https://github.com/ErinJordan222/"><img src="./images/github.png" alt="Github"></img></a>
        </Col>
        </Row>
        </div>
      </section>
  );
}