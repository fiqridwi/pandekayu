import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, deleteItem } from "../../actions";
import Swal from "sweetalert2";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(data.id));
    dispatch(deleteItem(1));
    Swal.fire({
      icon: "info",
      title: "Produk dihapus dari keranjang",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-thumb">
          <img
            src={require(`../../images/products/${data.id}.jpg`)}
            alt="cart-item-thumb"
          />
        </div>
        <div className="cart-item-detail">
          <h3>{data.name}</h3>
          <p>{`Rp. ${data.price}`}</p>
        </div>
      </div>
      <div className="cart-item-right">
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
