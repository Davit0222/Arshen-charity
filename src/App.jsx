import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Header from "./component/Header";
import BlogSection from "./component/BlogSection";
import { motion } from "framer-motion";
import "./App.css";
import PageTracker from "./component/PageTracker";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
function App() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5, ease: "easeOut" }}
		>
			<Router>
				<PageTracker />
				<Header />
				<main className="main">
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/blog" element={<BlogSection />} />
							<Route path="/team" element={<Team />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Suspense>
				</main>
			</Router>
		</motion.div>
	);
}

export default App;
