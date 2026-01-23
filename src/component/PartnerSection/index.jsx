import "./style.css";
import img1 from "../../assets/partner1.png";
import img2 from "../../assets/partner2.png";
import img3 from "../../assets/partner3.png";
import img4 from "../../assets/partner4.png";
import img5 from "../../assets/partner5.png";

import Container from "../Container";
function PartnerSection() {
	return (
		<div className="PartnerSection">
			<Container>
				<div className="partner-container">
					<h5>
						Over <span>200+</span> partner currently have us
					</h5>
					<div className="partner">
						<div className="partner-item">
							<img src={img1} width={100} height={200} alt="img1" />
							<img src={img2} width={100} height={200} alt="img2" />
							<img src={img3} width={100} height={200} alt="img3" />
							<img src={img4} width={100} height={200} alt="img4" />
							<img src={img5} width={100} height={200} alt="img5" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
export default PartnerSection;
