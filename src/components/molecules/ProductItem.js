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
      timer: 1000,
    });
  };

  return (
    <div className="product-item">
      <div>
        <img
          className="product-item-thumbnail"
          src={require(`../../images/products/${id}.jpg`)}
          alt="thumbnail"
        />
        <div className="product-item-text">
          <h3>{name}</h3>
          <p>{`Rp. ${price}`}</p>{" "}
        </div>
      </div>
      <button onClick={() => handleAddItem()} className="product-item-button">
        <Icon>add_shopping_cart</Icon>
      </button>
    </div>
  );
};

export default ProductItem;
