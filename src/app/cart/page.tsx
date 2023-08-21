export default function Cart() {
	return (
		<div className="shopping-cart">
			<h1 className="page-title">Keranjang</h1>
			<div className="shopping-cart-container">
				{/* <div>
					{products.products.length < 1 ? (
						<p className="shopping-cart-none">Keranjang belanja Anda kosong</p>
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
				</div> */}
			</div>
		</div>
	);
}
