import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userMessage, setUserMessage] = useState("");
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setUserMessage("Invalid email format.");
      } else {
        setUserMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage("This is a required field.");
      } else {
        setUserMessage("");
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserMessage("Your email was sent.");
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="container pt-4">
      <p>
        To request additional information or to set up an interview, please
        complete the form below:
      </p>
      <section className="features-icons bg-success-emphasis text-center m-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Please enter your full name</Form.Label>
            <Form.Control
              name="name"
              onBlur={handleValidation}
              onChange={handleChange}
              value={formState.name}
              type="text"
              placeholder="Enter name"
            />
            <Form.Text className="text-muted">
              All submissions will be kept confidential.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Please enter your email address</Form.Label>
            <Form.Control
              name="email"
              onBlur={handleValidation}
              onChange={handleChange}
              value={formState.email}
              type="email"
              placeholder="Email address"
            />
            <Form.Text className="text-muted">
              I will never share your email address with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Please input your message.</Form.Label>
            <Form.Control
              name="message"
              onBlur={handleValidation}
              onChange={handleChange}
              value={formState.message}
              type="text"
              placeholder="Enter message"
            />
          </Form.Group>
          {userMessage && <p className="text-danger">{userMessage}</p>}
          <Button
            disabled={
              !formState.email ||
              !formState.name ||
              !formState.message ||
              userMessage
            }
            className="mb-3"
            variant="success"
            type="submit"
          >
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
