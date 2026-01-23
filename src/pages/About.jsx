import { useEffect } from "react";
import Footer from "../component/Footer";
import { motion } from "motion/react";
import "./about.css";
function About() {
	useEffect(() => {
		document.title = "About";
	});
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: "linear",
					layout: { duration: 1.3 },
					delay: 0.4,
				}}
			>
				<div className="about">
					<h2>Our vision</h2>
					<h3> The object and goals of the organization's activities are: </h3>

					<ul>
						<li>
							To organize and implement social and charitable programs for
							socially vulnerable and needy segments of the population. As well
							as to organize visits to orphanages and nursing homes,
							penitentiary institutions
						</li>
						<li>
							organize and implement educational, sports, cultural and
							historical programs for socially vulnerable and needy people of
							the population
						</li>
						<li>
							organize and implement international meetings, seminars,
							conferences, discussions, courses, groups, consultations,
							trainings, charity dinners, television, radio and Internet
							programs
						</li>

						<li>
							contribute to the moral and psychological education of socially
							vulnerable and needy children, adolescents and young people,
						</li>
						<li>
							promote the development of volunteerism and contribute to
							scientific, technical, artistic and cultural development among the
							needy and socially vulnerable population
						</li>
						<li>
							provide assistance to those affected in disaster zones and various
							conflicts (Armenians around the world, refugees, internally
							displaced persons, including stateless and foreign citizens). In
							order to implement the goals and objectives of the organization,
							the organization cooperated with state and local self-government
							bodies, international and foreign similar organizations, and other
							organizations registered in the Republic of Armenia. The
							organization has the right to carry out entrepreneurial activities
							in accordance with the goals set forth in its charter, to use its
							property and the results of its activities for this purpose, as
							well as to establish a commercial organization or become a
							participant in it in accordance with the procedure established by
							law.
						</li>
					</ul>
				</div>
			</motion.div>
			<h3>Our Address</h3>
			<div className="contact-map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.18014409264333!2d44.694461906805564!3d39.854487395860154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401530ef508face7%3A0xd9a7117e9e0c5177!2sNoyan%20Tapan%20church!5e0!3m2!1sen!2sam!4v1763582148393!5m2!1sen!2sam"
					title="Noyan Tapan"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<Footer />
		</>
	);
}

export default About;
