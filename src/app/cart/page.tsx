"use client";
import useCart from "../hooks/useCart";
import ShoppingCartItem from "../components/cart/ShoppingCartItem";

export default function Cart() {
	const { items } = useCart();
	console.log(items);
	return (
		<div className="shopping-cart">
			<h1 className="page-title">Keranjang</h1>
			<div className="shopping-cart-container">
				<div>
					{/* {items.map((data, i) => {
						return (
							<div className="shopping-cart-item" key={name}>
								<li>{data.name}</li>
							</div>
						);
					})} */}
					{items.length < 1 ? (
						<p className="shopping-cart-none">Keranjang belanja Anda kosong</p>
					) : (
						items.map((data, i) => {
							return <ShoppingCartItem data={data} key={i} />;
						})
					)}
				</div>
				{/* 
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
				</div> */}
			</div>
		</div>
	);
}
