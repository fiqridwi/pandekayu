import pandeProject from "public/images/project-1.jpg";
import Image from "next/image";
import Button from "../shared/Button";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";

export default function PandeProjectSection() {
	return (
		<div className="project">
			<div className="project-image">
				<Image src={pandeProject} alt="pande-project" width={250} height={200} />
			</div>
			<div className="project-text">
				<div>
					<h2>Wujudkan desain furniture impian</h2>
					<p>Buat furniture dengan desain yang Anda ingingkan</p>
				</div>

				<div className="project-button">
					<Button title="Buat Sekarang" icon={faPenRuler} color="button-black"></Button>
				</div>
			</div>
		</div>
	);
}
