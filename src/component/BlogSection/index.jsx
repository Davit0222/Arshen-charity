import { useEffect } from "react";
import "./style.css";
import img1 from "../../assets/Blog.jpg";
import img2 from "../../assets/Blog2.png";
import img3 from "../../assets/Blog3.png";

import Container from "../Container";
import { motion } from "motion/react";
function BlogSection() {
	useEffect(() => {
		document.title = "Blog";
	});
	const blog_data = [
		{
			type: "text",
			img: img1,
			title: "Aug 11, 2023",
			quote:
				"The Impact of Your Donations: Real Stories from Orphaned Children",
			id: "text11",
		},
		{
			type: "text",

			img: img2,
			title: "Apr 26, 2023",
			quote:
				"								How Education Empowers Orphaned Children for a Brighter Future",
			id: "text22",
		},
		{
			type: "text",

			img: img3,
			title: "Sep 19, 2023",
			quote: "Providing Healthcare to Orphaned Children: Why It Matters",
			id: "text33",
		},
	];
	return (
		<div className="blogSection">
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
					<div className="blog-title">
						<p>Blogs</p>
						<h3 className="section-title">
							Stories, Insights, And Updates About Our Mission
						</h3>
					</div>
					<div className="viewall-blogs">
						<p>
							Narratives Unfolded: Discovering Stories, Gaining Insights, and
							Staying Updated on Our Ever-Evolving Mission
						</p>
						<a href="/blogs" target="_blank" rel="noopener noreferrer">
							View all
						</a>
					</div>
					<div className="cart-blog">
						{blog_data.map((item) => (
							<div className="cart-blog-item" key={item.id}>
								<img
									src={item.img}
									width={445}
									height={445}
									alt={`item post: ${item.id}`}
								/>
								<h4 className="desc-title">{item.title}</h4>
								<p className="section-title">{item.quote}</p>
							</div>
						))}
					</div>
				</motion.div>
			</Container>
		</div>
	);
}
export default BlogSection;
