import "./style.css";

export default function Container({ children, type = "default" }) {
	const containerClass =
		type === "large" ? "large" : type === "medium" ? "medium" : "";
	return <div className={`container ${containerClass}`}>{children}</div>;
}
