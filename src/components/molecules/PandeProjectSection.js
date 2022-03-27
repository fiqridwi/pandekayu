import React from "react";
import pandeProject from "../../images/project-1.jpg";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const PandeProjectSection = () => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={pandeProject} alt="pande-project" />
      </div>
      <div className="project-text">
        <div>
          <h2>Wujudkan desain furniture impian</h2>
          <p>Buat furniture dengan desain yang Anda ingingkan</p>
        </div>
        <Link to="pande-project" className="link">
          <div className="project-button">
            <Button
              title="Buat Sekarang"
              icon="construction"
              color="button-black"
            ></Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PandeProjectSection;
