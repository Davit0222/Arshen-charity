import styles from "./styles.module.css";
import img from "../../assets/logo.jpg";

export default function AppLogo({ className }) {
	return (
		<div className="logo">
			<a href="/" rel="noopener noreferrer" aria-label="Arshen home">
				<img
					src={img}
					alt="Arshen logo"
					width={65}
					height={65}
					className={`${styles.logo} ${className || ""}`}
				/>
			</a>
		</div>
	);
}
