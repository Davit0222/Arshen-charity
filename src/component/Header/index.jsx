import Navbar from "../Navbar";
import "./style.css";
import Container from "../Container";
import AppLogo from "../AppLogo";
import Button from "../Button";
import { useState } from "react";
import AccountNumbers from "../../AccountNumbers";
import { Link } from "react-router-dom";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

export default function Header() {
	const [modal, setModal] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function handleClick() {
		setModal(true);
	}
	function closeButton() {
		setModal(false);
	}
	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<header className="header">
			<Container type="large">
				<div className="header-content">
					<AppLogo />
					<Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

					<div className="donate">
						<Button variant="success" type="button" onClick={handleClick}>
							Donate{" "}
						</Button>

						{modal && <AccountNumbers onClose={closeButton} />}
						<Link to={"/contact"}>
							<Button variant="outlined" className="contact-btn" type="button">
								Contact Us
							</Button>
						</Link>
					</div>
					<button
						type="button"
						className="menu-toggle-btn"
						onClick={toggleMenu}
					>
						{!isMenuOpen ? <CiMenuBurger /> : <CiMenuFries />}
					</button>
				</div>
			</Container>
		</header>
	);
}
