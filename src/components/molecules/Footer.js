import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item">
          <div className="footer-item-title">
            <p>Pandekayu</p>
          </div>
          <a href="/">Tentang kami</a>
          <a href="/">PandeProjects</a>
          <a href="/">Blog</a>
        </div>
        <div className="footer-item-2">
          <div className="footer-item-title">
            <p>Layanan Pelanggan</p>
          </div>
          <a href="/">FAQ</a>
          <a href="/">Kebijakan Layanan</a>
          <a href="/">Syarat dan Ketentuan</a>
          <a href="/">Lokasi Pengiriman</a>
        </div>
        <div className="footer-item">
          <div className="footer-item-title">
            <p>Kontak Kami</p>
          </div>
          <a
            href="https://www.instagram.com/pande.kayu/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://tokopedia.link/lXSQdPsCkob"
            target="_blank"
            rel="noreferrer"
          >
            Tokopedia
          </a>
        </div>
      </div>
      <div className="footer-credit">
        <p>Created by </p>
        <a href="https://github.com/fiqridwi" target="_blank" rel="noreferrer">
          <FaGithub /> Fiqri Dwi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
