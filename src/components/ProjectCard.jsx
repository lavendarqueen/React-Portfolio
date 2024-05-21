import "./projectCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ProjectCard({ title, github, image, deployed }) {
  return (
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4">
      <Card style={{ width: "", height: "auto" }}>
        <Card.Body className="card-body d-flex flex-column align-items-center">
          <Card.Title className="mt-0 pt=0 fs-6">{title}</Card.Title>
          <Card.Img variant="" src={image} />
          <Button
            className=" btn-sm mt-1 px-1
             py-0"
            href={github}
            variant="outline-success"
            size="sm"
          >
            View GitHub Repository
          </Button>{" "}
          <Button
            className="btn-sm mt-1 mb-2 px-1 py-0"
            href={github}
            variant="outline-success"
            size="sm"
          >
            View Deployed Website
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}
