import "./style.css";
import { motion } from "motion/react";
import img1 from "../../assets/ImageHover.png";
import img2 from "../../assets/Frame178.png";
import img3 from "../../assets/Frame180.png";
import Container from "../Container";

const testimonialsData = [
	{
		type: "text",
		img: img1,
		quote:
			"It's better to share a piece of bread with people than to show them delicious dishes in pictures.",
		author: "Arayik Shahnazaryan",
		id: "text1",
	},
	{
		type: "text",
		img: img2,
		quote:
			"The development of science and technology is a great thing, but caring remains indispensable. Take care of each other.",
		author: "Andre Tajaryan",
		id: "text2",
	},
	{
		type: "text",
		img: img3,
		quote:
			"Charity is the pure love of the heart, the selfless expression of empathy that binds us all as one human family.",
		author: "Mother Teresa",
		id: "text3",
	},
];

function Testimonials() {
	return (
		<div className="testimonials-section">
			<Container>
				<h2 className="section-title text-center">Empowering Bright Futures</h2>
				<p className="section-desc text-center">
					Empowering Bright Futures. In our quest for a better and more just
					world, the Arshen Humanity Foundation is dedicated to compassion and
					positive change.
				</p>
				<div className="testimonials">
					{testimonialsData.map((item, i) => {
						const oddClass = i % 2 === 0 ? "odd" : "even";
						return (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.3 }}
								className={`testimonial-item ${oddClass}`}
							>
								<div className="testimonial-img">
									<img src={item.img} alt={item.author} />
								</div>
								<div className="testimonial-text">
									<p>{item.quote}</p>
									<p className="author">{item.author}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}

export default Testimonials;
