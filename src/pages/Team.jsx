import { useEffect } from "react";
import HeroBanner from "../component/Banner/HeroBanner";
import Footer from "../component/Footer";

function Team() {
	useEffect(() => {
		document.title = "Team";
	});
	return (
		<>
			<HeroBanner />

			<Footer />
		</>
	);
}

export default Team;
