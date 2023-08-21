import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type ProductItemProps = {
	name: string;
	price: number;
	id: number;
};

const ProductItem = ({ name, price, id }: ProductItemProps) => {
	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	return (
		<div className="product-item">
			<div>
				<Image
					width={50}
					height={210}
					className="product-item-thumbnail"
					src={require(`@/public/images/products/${id}.jpg`)}
					alt="thumbnail"
				/>
				<div className="product-item-text">
					<h3>{name}</h3>
					<p>{`Rp ${numberWithCommas(price)}`}</p>{" "}
				</div>
			</div>
			<button className="product-item-button">
				<FontAwesomeIcon icon={faCartPlus} />
			</button>
		</div>
	);
};

export default ProductItem;
