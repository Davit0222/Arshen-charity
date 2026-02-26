import Button from "../component/Button";
import "./form.css";

function Form({
	formType = "contact",
	onSubmit,
	buttonText = "Submit",
	loading,
	status,
}) {
	return (
		<form className="form" onSubmit={onSubmit}>
			<input type="hidden" name="subject" value="New Contact Message" />
			<input
				type="text"
				name="company"
				tabIndex="-1"
				autoComplete="off"
				style={{ display: "none" }}
			/>

      <label className="sr-only" htmlFor="contact-name">
        Your name
      </label>
      <input
        type="text"
        name="name"
        id="contact-name"
        className="form-input"
        placeholder="Your name *"
        autoComplete="name"
        required
      />

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="contact-email"
        required
        className="form-input"
        placeholder="Email *"
        autoComplete="email"
      />

      <label className="sr-only" htmlFor="contact-message">
        Your message
      </label>
      <textarea
        name="message"
        id="contact-message"
        className="form-input"
        placeholder="Your message *"
        required
      />
			<Button type="submit" disabled={loading} className="form-btn">
				{buttonText}
			</Button>
			{status && (
				<output className="form-status" aria-live="polite">
					{status}
				</output>
			)}
		</form>
	);
}
export default Form;
