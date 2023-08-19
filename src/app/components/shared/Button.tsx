import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ title, icon, color }) {
	return (
		<a className={`button ${color}`} href="">
			<p>{title}</p>
			<FontAwesomeIcon icon={icon} />
		</a>
	);
}
