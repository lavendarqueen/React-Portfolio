import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ContactPage() {
  return (
    <div className="container pt-4">
      <p>
        To request additional information or to set up an interview, please
        complete the form below:
      </p>
      <section className="features-icons bg-success-emphasis text-center m-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Please enter your full name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
            <Form.Text className="text-muted">
              All submissions will be kept confidential.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Please enter your email address</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
            <Form.Text className="text-muted">
              I will never share your email address with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Please input your message.</Form.Label>
            <Form.Control type="message" placeholder="Enter message" />
          </Form.Group>
          <Button className="mb-3" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <p>
        Thank you for your interest in my portfolio. I will respond to your
        message at my very earliest convenience. I look forward to the
        opportunity to be considered for a position with your firm.
      </p>
    </div>
  );
}
