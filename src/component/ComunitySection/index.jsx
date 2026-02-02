import img1 from "../../comunity/1.jpg";
import img2 from "../../comunity/2.jpg";
import img3 from "../../comunity/Stella.jpg";
import img4 from "../../comunity/4.jpg";
import img5 from "../../comunity/5.jpg";
import img6 from "../../comunity/ar.jpg";
import img7 from "../../comunity/2026-01-14 18.34.23.jpg";
import img8 from "../../comunity/comunity8.jpeg";

import Container from "../Container";
import "./style.css";

function ComunitySection() {
	return (
		<div className="comunitySection">
			<Container type="medium">
				<div className="comunity-container">
					<h3>Stories from Our Community</h3>
					<div className="comunity">
						<div className="comunity-item">
							<p>
								There are problems everywhere in the world: poverty, misery,
								hunger, crisis. I'm trying to make someone happy.
							</p>
							<div className="comunity-person">
								<img src={img6} width={100} height={100} alt="img6" />
								<div className="comunity-name">
									<h3>Arayik Shahnazaryan</h3>
									<p> President of The Organization</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								Years ago, I was in great difficulty myself, and there were
								people who reached out to me in my difficult time. Now I want to
								be the one to reach out.
							</p>

							<div className="comunity-person">
								<img src={img4} width={100} height={100} alt="img4" />
								<div className="comunity-name">
									<h3>Jivan Nadaryan</h3>
									<p> Secretary of The Organization</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								For them, doing good is passing on a legacy and creating value
								in adulthood.
							</p>
							<div className="comunity-person">
								<img
									src={img3}
									width={100}
									height={100}
									id="comunity-img"
									alt="img3"
								/>
								<div className="comunity-name">
									<h3>Estella Saghian</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								Love is not just a feeling, it is an action that is shown by
								caring, by sharing your bread, by not being indifferent.
							</p>

							<div className="comunity-person">
								<img src={img2} width={100} height={100} alt="img2" />
								<div className="comunity-name">
									<h3>Andre Tajaryan</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								The belief that the future will be good is very positive because
								many people struggle in life with this very hope and faith..
								Let's help make someone's life better
							</p>
							<div className="comunity-person">
								<img src={img5} width={100} height={100} alt="img5" />
								<div className="comunity-name">
									<h3>Anita Zohrabyan</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								Society has different layers, whether a person is rich or poor,
								everyone needs good treatment. and the one who satisfies that
								need is you and me.
							</p>
							<div className="comunity-person">
								<img src={img1} width={100} height={100} alt="img1" />
								<div className="comunity-name">
									<h3>Silva Abnoosian</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								Each generation has its own perception of life. Values, views,
								and standards change, but people who are healthy in spirit live
								with a clear conscience, preserve kindness, and pass hope on to
								future generations.
							</p>
							<div className="comunity-person">
								<img src={img7} width={100} height={100} alt="img7" />
								<div className="comunity-name">
									<h3>Smbat Shahnazaryan</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
						<div className="comunity-item">
							<p>
								Care unites hearts, love strengthens the essence, and heals the
								soul.
							</p>
							<div className="comunity-person">
								<img
									className="comunity-person-img"
									src={img8}
									width={100}
									height={100}
									alt="img8"
								/>
								<div className="comunity-name">
									<h3>Poghos Mrjumyan</h3>
									<p>Council Member</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
export default ComunitySection;
