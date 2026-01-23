import { motion } from "motion/react";
import "./style.css";
import img1 from "../../assets/image2.png";
import img2 from "../../assets/image3.png";
import img3 from "../../assets/image4.png";

import { FaHandHoldingMedical } from "react-icons/fa6";

import Container from "../Container";
function Genre() {
	return (
		<div className="genre-wrapper">
			<Container>
				<div className="genre-track">
					<div className="group">
						<div className="sec1">
							<img
								src={img1}
								width={72}
								height={72}
								className="genre-img1"
								alt="img1"
							/>
							<p>Healthy Food</p>
							<div className="sec-div" />
						</div>
						<div className="sec2">
							<img
								src={img2}
								width={72}
								height={72}
								className="genre-img2"
								alt="img2"
							/>
							<p>Clean Water</p>
							<div className="sec-div" />
						</div>
						<div className="sec3">
							<img
								src={img3}
								width={72}
								height={72}
								className="genre-img3"
								alt="img3"
							/>
							<p>Education</p>
							<div className="sec-div" />
						</div>
						<div className="sec4">
							<FaHandHoldingMedical className="FaHandHoldingMedical" />
							<p>Medical Care</p>
							<div className="sec-div" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Genre;
