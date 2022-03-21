import React from "react";
import { FcGallery, FcPlanner, FcPaid, FcInTransit } from "react-icons/fc";

const PandeProjects = () => {
  return (
    <div className="pandeprojects">
      <h1 className="page-title">PandeProjects</h1>
      <div className="pandeprojects-procedure">
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcGallery size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            Pertama, pilih desain yang Anda mau beserta ukuran dan detail produk
            lainnya. Tim kami akan menentukan apakah desain yang Anda ajukan
            dapat diterima atau tidak.
          </div>
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcPlanner size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            Kedua, tim kami akan memberikan info mengenai estimasi durasi
            pengerjaan serta menyepakati harga bersama.
          </div>
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcPaid size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            Ketiga, lakukan pembayarn sesuai kesepakatan untuk <i>pre-order</i>{" "}
            produk.
          </div>
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcInTransit size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            Terakhir, produk Anda akan kami kirimkan ke lokasi tujuan.
          </div>
        </div>
      </div>
      <div className="pandeprojects-contact">
        <p>
          Hubungi tim kami,{" "}
          <a
            href="https://www.instagram.com/pande.kayu/"
            target="_blank"
            rel="noreferrer"
          >
            di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default PandeProjects;
