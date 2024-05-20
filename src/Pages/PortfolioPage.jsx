import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectData from "../assets/data/projectData";
import ProjectCard from "../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          vendor={project.vendor}
          image={project.image}
          deployed={project.deployed}
        />
      ))}
    </div>
  );
}
