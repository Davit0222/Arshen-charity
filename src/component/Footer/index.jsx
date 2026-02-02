import Container from "../Container";
import "./style.css";
import AppLogo from "../AppLogo";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";

function Footer() {
	return (
		<div className="footer">
			<Container>
				<div className="footer-section">
					<div className="footer-top">
						<AppLogo className="footer-logo" />
						<div className="footer-nav">
							<div className="footer-info">
								<div className="info-icon">
									{" "}
									<MdAddIcCall />
									<a href="tel:+374 55 222023" rel="noopener noreferrer">
										+374 55 222023
									</a>
								</div>
								<hr className="info-hr" />
								<div className="info-icon">
									{" "}
									<LuMessageSquareMore />
									<a href="mailto:arshen@arshen.am" rel="noopener noreferrer">
										arshen@arshen.am
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="social">
						<div className="footer-bottom">
							<a
								href="https://www.facebook.com/share/16TBpiJ1AY/?mibextid=wwXIfr"
								rel="noopener noreferrer"
								alt="go to out facebook page"
							>
								<FaFacebook
									className="footer-botom-facebook"
									style={{ color: "#1877F2", width: "24", height: "24" }}
								/>
							</a>
						</div>
						<div className="footer-bottom">
							<a
								href="https://www.instagram.com/arshen_charitable_organisation/?next=%2F"
								rel="noopener noreferrer"
								alt="go to out instagram page"
							>
								<BsInstagram
									className="footer-botom-instagram"
									style={{ color: "#ee2a7b,", width: "24", height: "24" }}
								/>
							</a>
						</div>
						<div className="footer-bottom">
							<a
								href="/"
								alt="go to out youtube page"
								rel="noopener noreferrer"
							>
								<IoLogoYoutube
									className="footer-botom-youtube"
									style={{ color: "red", width: "24", height: "24" }}
								/>
							</a>
						</div>
					</div>

					<hr />
					<p>{new Date().getFullYear()} Arshen. All rights reserved.</p>
				</div>
			</Container>
		</div>
	);
}
export default Footer;
