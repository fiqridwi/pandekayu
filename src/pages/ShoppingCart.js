import React from "react";
import { useSelector } from "react-redux";
import ShoppingCartItem from "../components/molecules/ShoppingCartItem";
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
      confirmButtonColor: "#03AC0E",
      html: "Produk kami dapat dipesan melalui Tokopedia ",
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
    <div className="shopping-cart">
      <h1 className="margin-bottom-3">Keranjang</h1>
      <div className="shopping-cart-container">
        <div className="cart-list">
          {products.products.length < 1 ? (
            <p>Keranjang belanja Anda kosong</p>
          ) : (
            products.products.map((data, i) => {
              return <ShoppingCartItem data={data} key={i} />;
            })
          )}
        </div>
        <div className="shopping-cart-summary">
          <p style={{ marginBottom: "2rem" }}>Ringkasan belanja</p>
          <p style={{ color: "grey" }}>{`${item} Produk`}</p>
          <div className="shopping-cart-summary-line"></div>
          <div className="shopping-cart-summary-total">
            <p style={{ fontWeight: "bolder" }}>Total</p>
            <p>{`Rp. ${total}`}</p>
          </div>

          <button
            className="shopping-cart-payment-button"
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
