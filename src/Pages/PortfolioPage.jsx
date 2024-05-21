import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectData from "../assets/data/projectData";
import ProjectCard from "../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <div className="projectCards">
      <p className="text-center fs-5 mt-2">
        I have attached links to several of my recent projects for your review.
      </p>
      <div className="container">
        <div className="row">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              github={project.github}
              image={project.image}
              deployed={project.deployed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
