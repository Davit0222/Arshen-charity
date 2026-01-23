import "../styles/Section3.css";
import img1 from "../assets/ImageHover.png";
import img2 from "../assets/Frame178.png";
import img3 from "../assets/Frame180.png";
function Section3() {
	return (
		<div className="section3">
			<div className="sec3-content">
				<h1>Empowering Bright Futures</h1>
				<p>
					In our quest for a better and more just world, the We Are Humanity
					Foundation is dedicated to compassion and positive change.
				</p>
			</div>
			<div className="sec3-images">
				<div className="img1">
					<img src={img1} alt="sdfva" width={400} height={406} />
					<p>
						“The smallest act of kindness is worth more than the grandest
						intention. Let your actions speak volumes for need”
					</p>

					<img src={img2} alt="sdfva" width={400} height={406} />
				</div>
				<div className="img2">
					<p>
						“In the tapestry of life, every thread of charity adds beauty and
						strength. Together, we weave a brighter tomorrow.”
					</p>
					<img src={img3} alt="sdfva" width={400} height={406} />
					<p>
						“Charity is the pure love of the heart, the selfless expression of
						empathy that binds us all as one human family.”
					</p>
				</div>
			</div>
		</div>
	);
}
export default Section3;
