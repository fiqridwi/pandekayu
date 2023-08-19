import heroImage1 from "@/public/images/products/13.jpg";
import heroImage2 from "@/public/images/products/17.jpg";
import heroImage3 from "@/public/images/products/22.jpg";
import Image from "next/image";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/shared/Button";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-text">
				<h1 className="hero-title">Furniture Kayu Menarik</h1>
				<p className="margin-bottom-3">
					Pandekayu woodworks menyediakan produk-produk furniture bergaya modern dan
					berkualitas namun dengan harga yang terjangkau.
				</p>
				<div className="hero-button">
					<Button title="Mulai Belanja" icon={faCartPlus} color="button-yellow" />
				</div>
			</div>

			<div className="hero-image">
				<div className="hero-image-1">
					<Image src={heroImage1} alt="heroimage" width={200} height={300} />
				</div>
				<div className="hero-image-2">
					<Image src={heroImage2} alt="heroimage" width={200} height={120} />
				</div>
				<div className="hero-image-3">
					<Image src={heroImage3} alt="heroimage" width={200} height={150} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
