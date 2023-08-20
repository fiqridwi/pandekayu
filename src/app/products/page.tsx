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
export default async function Products() {
	const { products } = await getProducts();
	console.log(products, "products");

	return (
		<>
			<h1>Product</h1>
		</>
	);
}
