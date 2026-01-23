import "./contact.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Form from "../component/Form";
import React from "react";
import { useEffect } from "react";
const access_key = import.meta.env.VITE_WEB3FORMS_KEY;

function Contact() {
	useEffect(() => {
		document.title = "Contact";
	});
	const [status, setStatus] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			setStatus("❌ Please enter a valid email address");
			return;
		}

		setLoading(true);
		setStatus("Sending...");

		const formData = new FormData(event.target);
		formData.append("access_key", access_key);
		if (event.target.company.value) {
			return;
		}

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				setStatus("✅ Message sent successfully!");
				event.target.reset();
			} else {
				setStatus("❌ Something went wrong");
			}
		} catch (error) {
			setStatus("❌ Network error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="contact">
				<div className="contact-title">
					<h1>Contact us</h1>
					<p>
						Growing up in poverty, society faces tough challenges: hunger and
						limited access to education.
					</p>
				</div>

				<Form onSubmit={onSubmit} loading={loading} status={status} />
			</div>
			<Footer />
		</>
	);
}

export default Contact;
