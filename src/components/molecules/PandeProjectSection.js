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
        <div className="margin-bottom-3">
          <h2>Wujudkan desain furniture impian</h2>
          <p>Buat furniture dengan desain yang anda ingingkan</p>
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
