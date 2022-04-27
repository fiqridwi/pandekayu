import React from "react";

const Modal = ({ selectImage, setSelectImage }) => {
  const handleClick = () => {
    setSelectImage(null);
  };

  return (
    <div className="backdrop" onClick={() => handleClick()}>
      <img
        src={
          selectImage ? require(`../../images/products/${selectImage}.jpg`) : ""
        }
        alt="enlarged pic"
      />
    </div>
  );
};

export default Modal;
