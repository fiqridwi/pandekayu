import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PandeKayu",
	description:
		"Pandekayu woodworks menyediakan produk-produk furniture bergaya modern dan berkualitas namun dengan harga yang terjangkau",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
