import React from "react";
import { addItem, addProduct } from "../../actions";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";

const ProductItem = ({ name, price, id, setSelectImage }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    const newProduct = {
      id: id,
      name: name,
      price: +price,
    };

    dispatch(addItem(1));
    dispatch(addProduct(newProduct));
    Swal.fire({
      icon: "success",
      title: "Berhasil ditambahkan ke keranjang",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="product-item">
      <div onClick={() => setSelectImage(id)}>
        <img
          className="product-item-thumbnail"
          src={require(`../../images/products/${id}.jpg`)}
          alt="thumbnail"
        />
        <div className="product-item-text">
          <h3>{name}</h3>
          <p>{`Rp ${numberWithCommas(price)}`}</p>{" "}
        </div>
      </div>
      <button onClick={() => handleAddItem()} className="product-item-button">
        <MdOutlineAddShoppingCart />
      </button>
    </div>
  );
};

export default ProductItem;
