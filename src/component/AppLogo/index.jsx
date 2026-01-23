import styles from "./styles.module.css";
import img from "../../assets/logo.jpeg";

export default function AppLogo({ className }) {
	return (
		<img
			src={img}
			alt="pic"
			width={65}
			height={65}
			className={`${styles.logo}${className || ""}`}
		/>
	);
}
