import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Hero from "./dashboard/components/Hero";
import Navbar from "./dashboard/components/Navbar";

// import { main.scss } from 'public/styles';
export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
		</main>
	);
}
