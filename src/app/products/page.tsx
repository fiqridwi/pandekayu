import ProductItem from "../components/products/ProductItem";
import loadingGIF from "@/public/icons/loading.gif";
import Image from "next/image";

export default async function Products() {
	const { products } = await getProducts();
	// console.log(products, "products");

	return (
		<div className="products">
			<h1 className="page-title">Produk Kami</h1>
			<div className="products-list">
				{products.length == 0 ? (
					<Image src={loadingGIF} alt="loading-gif" />
				) : (
					products.map((item: any) => {
						return (
							<ProductItem
								key={item.name}
								name={item.name}
								price={item.price}
								id={item.id}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
const getProducts = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/products", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch topics");
		}
		return res.json();
	} catch (error) {
		console.log("Error loading topics: ", error);
	}
};
