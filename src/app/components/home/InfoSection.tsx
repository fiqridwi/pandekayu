import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faTags, faWrench } from "@fortawesome/free-solid-svg-icons";
const InfoSection = () => {
	return (
		<div className="info">
			<div className="info-item">
				<div className="info-icon">
					<FontAwesomeIcon icon={faThumbsUp} size="3x" />
				</div>
				<div className="info-text">
					<div className="info-title">Desain Modern</div>
					<div className="info-detail">
						Tampilan produk yang modern dengan kualitas yang baik
					</div>
				</div>
			</div>
			<div className="info-item ">
				<div className="info-icon">
					<FontAwesomeIcon icon={faTags} size="3x" />
				</div>
				<div className="info-text">
					<div className="info-title">Harga Menarik</div>
					<div className="info-detail">
						Harga terjangkau dengan tawaran diskon gratis ongkir
					</div>
				</div>
			</div>
			<div className="info-item">
				<div className="info-icon">
					<FontAwesomeIcon icon={faWrench} size="3x" />
				</div>
				<div className="info-text">
					<div className="info-title">Kustomisasi</div>
					<div className="info-detail">
						Pilihan desain tak terbatas pada produk yang tersedia
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoSection;
