import "./style.css";
import img from "../../assets/donate.png";
import Form from "../Form";
import Container from "../Container";
function DonateSection() {
	return (
		<div className="donateSection">
			<Container>
				<div className="donate-container">
					<img src={img} width={100} height={100} alt="donate" />
					<div className="donation-form">
						<h3>Donate Now!</h3>
						<Form />
					</div>
				</div>
			</Container>
		</div>
	);
}
export default DonateSection;
