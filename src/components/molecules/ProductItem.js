import React from "react";
import { addItem, addProduct } from "../../actions";
import Icon from "@mui/material/Icon";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";

const ProductItem = ({ name, price, id }) => {
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
      timer: 1500,
    });
  };

  return (
    <div className="product-item">
      <div className="product-item-container">
        <div className="product-item-thumbnail">
          <img
            className="thumbnail"
            src={require(`../../images/products/${id}.jpg`)}
            alt="thumbnail"
          />
        </div>
        <div className="product-item-text">
          <h3>{name}</h3>
          <p>{`Rp. ${price}`}</p>
        </div>
        <button onClick={() => handleAddItem()} className="add-to-cart-button">
          <Icon>add_shopping_cart</Icon>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
