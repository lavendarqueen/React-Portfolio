import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectData from "../assets/data/projectData";
import PortfolioCard from "../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <div>
      {projectData.map((project) => (
        <PortfolioCard
          key={project.title}
          title={project.title}
          github={project.github}
          image={project.image}
          deployed={project.deployed}
        />
      ))}
    </div>
  );
}
