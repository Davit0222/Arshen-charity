import "./style.css";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "cotnained",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className} btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
