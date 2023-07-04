import React from "react";
import { Link } from "react-router-dom";
import "./FaveProjectsCard.css";

const FaveProjectsCard = () => {
  return (
    <div className="fave-projects-card">
      <p className="fave-projects-text">View some of my favorite Projects</p>
      <Link to="/projects" className="fave-projects-btn">
        View Projects
      </Link>
    </div>
  );
};

export default FaveProjectsCard;
