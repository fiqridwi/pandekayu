import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import InfoSection from "./components/home/InfoSection";
import PandeProjectSection from "./components/home/PandeProjectSection";
import Footer from "./components/home/Footer";
import RootLayout from "./layout";

// import { main.scss } from 'public/styles';
export default function Home() {
	return (
		<main>
			{/* <Navbar /> */}
			<Hero />
			<InfoSection />
			<PandeProjectSection />
			{/* <Footer /> */}
		</main>
	);
}
