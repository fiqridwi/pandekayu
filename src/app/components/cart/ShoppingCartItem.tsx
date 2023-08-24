// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteProduct, deleteItem } from "../../actions";
// import Swal from "sweetalert2";
// import Icon from "@mui/material/Icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ShoppingCartItem = ({ data }) => {
	// const dispatch = useDispatch();
	// const handleDelete = () => {
	// 	dispatch(deleteProduct(data.id));
	// 	dispatch(deleteItem(1));
	// 	Swal.fire({
	// 		icon: "info",
	// 		title: "Produk dihapus dari keranjang",
	// 		showConfirmButton: false,
	// 		timer: 1000,
	// 	});
	// };
	return (
		<div className="cart-item">
			<div className="cart-item-left">
				<div className="cart-item-thumb">
					<Image
						width={100}
						src={require(`@/public/images/products/${data.id}.jpg`)}
						alt="cart-item-thumb"
					/>
				</div>
				<div className="cart-item-detail">
					<h3>{data.name}</h3>
					<p>{`Rp. ${data.price}`}</p>
				</div>
			</div>
			<div className="cart-item-right">
				<div className="cart-item-right-line"></div>
				<button className="cart-item-delete-button">
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</div>
	);
};

export default ShoppingCartItem;
