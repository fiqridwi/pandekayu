import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({ title, icon, color, link }) {
	return (
		<a className={`button ${color}`} href={link}>
			<p>{title}</p>
			<FontAwesomeIcon icon={icon} />
		</a>
	);
}
