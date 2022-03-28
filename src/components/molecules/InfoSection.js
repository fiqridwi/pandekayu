import React from "react";
import Icon from "@mui/material/Icon";
import { FaThumbsUp, FaTags, FaWrench } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div className="info">
      <div className="info-item">
        <div className="info-icon">
          <FaThumbsUp size="28" />
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
          <FaTags size="28" />
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
          <FaWrench size="28" />
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
