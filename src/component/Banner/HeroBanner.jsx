import "./style.css";
import imgHeader from "../../assets/hero2.jpg";
import Button from "../Button";
import Container from "../Container";
import { useState } from "react";
import AccountNumbers from "../../AccountNumbers";
import { motion } from "motion/react";
function HeroBanner() {
	const [modal, setModal] = useState(false);

	function handleClick() {
		setModal(true);
	}
	function closeButton() {
		setModal(false);
	}
	return (
		<>
			<div className="hero-banner">
				<img
					src={imgHeader}
					fetchPriority="high"
					loading="eager"
					alt="Arshen Charity Foundation"
					width={700}
					height={851}
				/>

				<div className="hero-banner-content">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							ease: "linear",
							layout: { duration: 11.3 },
							delay: 0.5,
						}}
					>
						<Container>
							<h1>A more prosperous society</h1>
							<Button
								variant="success"
								className="herobanner-btn"
								onClick={handleClick}
							>
								Start Donating Now
							</Button>
						</Container>
					</motion.div>
				</div>
			</div>
			{modal && <AccountNumbers onClose={closeButton} />}
		</>
	);
}

export default HeroBanner;
