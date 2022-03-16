import React from "react";
import pandeProject from "../../images/project-1.jpg";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const PandeProjectSection = () => {
  return (
    <div className="project-section">
      <div className="project-image">
        <img src={pandeProject} alt="pande-project" />
      </div>
      <div className="project-text">
        <div className="project-title">
          <h2>Wujudkan desain furniture impian</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            facere magnam deserunt voluptatibus doloremque sit.
          </p>
        </div>
        <Link to="pande-project" className="link">
          <Button
            title="Buat Sekarang"
            icon="construction"
            color="button-black"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default PandeProjectSection;