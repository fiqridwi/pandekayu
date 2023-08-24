"use client";
import React, { useState } from "react";
import Link from "next/link";
import pandekayuLogo from "public/images/pandekayu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import useCart from "../../hooks/useCart";

const Navbar = () => {
	// const item = useSelector((state) => state.itemReducer);
	const [burgerMenu, setBurgerMenu] = useState("");
	const [toggle, setToggle] = useState("");
	const { items } = useCart();

	const handleClick = () => {
		if (burgerMenu === "") {
			setBurgerMenu("active");
		} else {
			setBurgerMenu("");
		}
	};

	return (
		<nav>
			<div className="nav-logo">
				<Link href="/">
					<Image src={pandekayuLogo} alt="pandekayu-logo" height={40} width={400} />
				</Link>
			</div>
			<div className="nav-menu">
				<Link className="nav-menu-item" href="/">
					Beranda
				</Link>
				<Link className="nav-menu-item margin-menu-nav" href="/products">
					Produk
				</Link>
				<Link className="nav-menu-item" href="/pande-projects">
					PandeProjects
				</Link>
			</div>

			<div className="nav-cart">
				<div onClick={() => handleClick()} className="nav-burger">
					<div className={`nav-burger-menu nav-burger-menu-${burgerMenu}`}>
						<Link className="nav-burger-menu-item" href="/">
							Beranda
						</Link>
						<Link className="nav-burger-menu-item " href="/products">
							Produk
						</Link>
						<Link className="nav-burger-menu-item" href="/pande-projects">
							PandeProjects
						</Link>
					</div>
					{/* <HiMenu fontSize="28" /> */}
				</div>
				<Link href="/cart">
					<FontAwesomeIcon icon={faCartShopping} />
				</Link>
				<p className="nav-cart-value">{items.length}</p>
			</div>
		</nav>
	);
};

export default Navbar;
