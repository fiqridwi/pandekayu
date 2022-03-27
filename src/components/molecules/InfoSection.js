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
          <div className="info-title">Desain Modern</div>
          <div className="info-detail">
            Tampilan produk yang modern dengan kualitas yang baik
          </div>
        </div>
      </div>
      <div className="info-item ">
        <div className="info-icon">
          <Icon fontSize="large">attach_money</Icon>
        </div>
        <div className="info-text">
          <div className="info-title">Harga Menarik</div>
          <div className="info-detail">
            Harga terjangkau dengan diskon gratis ongkir
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="info-icon">
          <Icon fontSize="3">construction</Icon>
        </div>
        <div className="info-text">
          <div className="info-title">Kustomisasi</div>
          <div className="info-detail">
            Pilihan desain tak terbatas pada produk yang tersedia
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
