import React from "react";
import {
  FcGallery,
  FcPlanner,
  FcMoneyTransfer,
  FcShipped,
  FcDown,
} from "react-icons/fc";

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
            <div className="pandeprojects-procedure-item-text-title">
              <p>Tentukan Desain</p>
            </div>
            <div className="pandeprojects-procedure-item-text-content">
              <p>
                Pertama, pilih desain yang Anda mau beserta ukuran dan detail
                produk lainnya. Tim kami akan menentukan apakah desain yang Anda
                ajukan dapat diterima atau tidak.
              </p>
            </div>
          </div>
        </div>
        <div className="pandeprojects-procedure-arrow">
          <FcDown size="28" />
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcPlanner size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            {" "}
            <div className="pandeprojects-procedure-item-text-title">
              <p>Kesepakatan</p>
            </div>
            <div className="pandeprojects-procedure-item-text-content">
              <p>
                Kedua, tim kami akan memberikan info mengenai estimasi durasi
                pengerjaan serta menyepakati harga bersama.
              </p>
            </div>
          </div>
        </div>
        <div className="pandeprojects-procedure-arrow">
          <FcDown size="28" />
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcMoneyTransfer size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            {" "}
            <div className="pandeprojects-procedure-item-text-title">
              <p>Pembayaran</p>
            </div>
            <div className="pandeprojects-procedure-item-text-content">
              <p>
                Ketiga, lakukan pembayarn sesuai kesepakatan untuk{" "}
                <i>pre-order</i> produk.
              </p>
            </div>
          </div>
        </div>
        <div className="pandeprojects-procedure-arrow">
          <FcDown size="28" />
        </div>
        <div className="pandeprojects-procedure-item">
          <div className="pandeprojects-procedure-item-icon">
            <FcShipped size="70" />
          </div>
          <div className="pandeprojects-procedure-item-text">
            {" "}
            <div className="pandeprojects-procedure-item-text-title">
              <p>Pengiriman</p>
            </div>
            <div className="pandeprojects-procedure-item-text-content">
              <p> Terakhir, produk Anda akan kami kirimkan ke lokasi tujuan.</p>
            </div>
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
          .
        </p>
      </div>
    </div>
  );
};

export default PandeProjects;
