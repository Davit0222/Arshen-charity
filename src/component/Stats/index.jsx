import Container from "../Container";
import "./style.css";
import Button from "../Button";
import { useState } from "react";
import AccountNumbers from "../../AccountNumbers";

function Stats() {
	const [modal, setModal] = useState(false);

	function handleClick() {
		setModal(true);
	}
	function closeButton() {
		setModal(false);
	}
	return (
		<div className="stats">
			<Container>
				<div className="container-stats">
					<div className="left">
						<h2>Help Us Create Brighter Futures for Insecure Society.</h2>
					</div>
					<div className="right">
						<div className="right-container">
							<p>
								Every member of society deserves a chance to thrive. Many face
								hunger, malnutrition, and lack of education and medical care.
								Support our mission to provide these opportunities and create
								lasting change.
							</p>
							<div className="stats-btn">
								<Button
									variant="donate"
									type="submit"
									className="btn-success"
									onClick={handleClick}
								>
									Start Donating Now
								</Button>
								{modal && <AccountNumbers onClose={closeButton} />}

								<a className="stats-a" href="/about" rel="noopener noreferrer">
									Read about us
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
export default Stats;
