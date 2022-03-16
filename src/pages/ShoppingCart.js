import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/molecules/CartItem";
import Swal from "sweetalert2";
import Icon from "@mui/material/Icon";
const ShoppingCart = () => {
  const products = useSelector((state) => state.cartReducer);
  const item = useSelector((state) => state.itemReducer);
  const price = useSelector((state) => state.cartReducer);
  const priceItem = price.products.map((data) => data.price);
  const total = priceItem.reduce((acc, item) => (acc += item), 0);

  // console.log(priceItem);
  const handlePaymentDialog = () => {
    Swal.fire({
      title: "<strong>Tertarik dengan produk kami ? :)</strong>",
      icon: "info",
      confirmButtonColor: "#03AC0E",
      html: "Produk kami dapat dipesan melalui Tokopedia ",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        "<a className='text'  href='https://tokopedia.link/lXSQdPsCkob' target='_blank'>Pesan di Tokopedia</a>",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Kembai",
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  return (
    <div className="cart">
      <h1>Keranjang</h1>
      <div className="shopping-cart">
        <div className="cart-list">
          {products.products.map((data, i) => {
            return <CartItem data={data} key={i} />;
          })}
        </div>
        <div className="cart-summary">
          <p style={{ marginBottom: "2rem" }}>Ringkasan belanja</p>
          <p style={{ color: "grey" }}>{`${item} Produk`}</p>
          <div className="line"></div>
          <div className="cart-total">
            <p style={{ fontWeight: "bolder" }}>Total</p>
            <p>{`Rp. ${total}`}</p>
          </div>

          <button
            className="payment-button"
            onClick={() => handlePaymentDialog()}
          >
            Bayar <Icon>payment</Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
