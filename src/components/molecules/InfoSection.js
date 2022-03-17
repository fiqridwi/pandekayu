import React from "react";
import Icon from "@mui/material/Icon";

const InfoSection = () => {
  return (
    <div className="info">
      <div className="info-item">
        <div className="info-icon">
          <Icon fontSize="large">thumb_up</Icon>
        </div>
        <div className="info-text">
          <div className="info-title">Good Quality</div>
          <div className="info-detail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="info-item info-item-2">
        <div className="info-icon">
          <Icon fontSize="large">attach_money</Icon>
        </div>
        <div className="info-text">
          <div className="info-title">Affordable Price</div>
          <div className="info-detail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="info-icon">
          <Icon fontSize="large">construction</Icon>
        </div>
        <div className="info-text">
          <div className="info-title">Customization</div>
          <div className="info-detail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
