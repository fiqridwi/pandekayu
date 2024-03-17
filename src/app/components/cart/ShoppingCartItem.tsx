// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteProduct, deleteItem } from "../../actions";
// import Swal from "sweetalert2";
// import Icon from "@mui/material/Icon";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import useCart from '../../hooks/useCart';

const ShoppingCartItem = ({ data }: any) => {
	const { removeProduct } = useCart();
	const handleDelete = () => {
		removeProduct(data.id);
	};
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
					<FontAwesomeIcon icon={faTrash} size="xl" onClick={handleDelete} />
				</button>
			</div>
		</div>
	);
};

export default ShoppingCartItem;
