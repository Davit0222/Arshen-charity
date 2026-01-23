import "./style.css";
import img2 from "../../assets/Frame43.png";
import img3 from "../../assets/Frame44.png";
import img1 from "../../assets/Frame45.png";
import { motion } from "motion/react";
import Container from "../Container";
function FutureSection() {
	return (
		<div className="future-section-main">
			<Container>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						ease: "linear",
						layout: { duration: 2.3 },
						delay: 0.3,
					}}
				>
					<div className="main-future">
						<div className="title">
							<p>Featured Cause</p>
							<h2>You can help lots of peopleby donating little </h2>
						</div>
						<div className="future-section">
							<div className="cart">
								<img src={img1} width={100} height={100} alt="img3" />
								<h2>Access to Education</h2>
								<p>
									Education is the key to a brighter future. Help provide school
									supplies and tuition fees for orphaned children to attend
									school.
								</p>
								<a href="/more" rel="noopener noreferrer">
									Read More{" "}
								</a>
							</div>
							<div className="cart">
								<img src={img2} width={100} height={100} alt="img2" />
								<h2>Provide Safe Shelter</h2>
								<p>
									Thousands of orphaned children are in need of a safe and
									secure place to live. Help build homes for those without
									families.
								</p>
								<a href="/more" rel="noopener noreferrer">
									Read More{" "}
								</a>
							</div>
							<div className="cart">
								<img src={img3} width={100} height={100} alt="img1" />
								<h2>Medical Care for Orphans</h2>
								<p>
									Provide orphaned children with healthcare, including
									vaccinations, check-ups, and treatments to keep them healthy.
								</p>
								<a href="/more" rel="noopener noreferrer">
									Read More{" "}
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			</Container>
		</div>
	);
}
export default FutureSection;
