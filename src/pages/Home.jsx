import Genre from "../component/Genre";
import HeroBanner from "../component/Banner/HeroBanner";
import Stats from "../component/Stats";
import Testimonials from "../component/Testimonials";
import BlogSection from "../component/BlogSection";
import Footer from "../component/Footer";
import ComunitySection from "../component/ComunitySection";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		document.title = "Arshen.net";
	});
	return (
		<>
			<HeroBanner />
			<Genre />
			<Stats />
			<Testimonials />
			<BlogSection />
			<ComunitySection />
			<Footer />
		</>
	);
}

export default Home;
