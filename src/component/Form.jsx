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

      <input
        type="text"
        name="name"
        className="form-input"
        placeholder="Your name *"
        autoComplete="name"
        required
      />

      <input
        type="email"
        name="email"
        required
        className="form-input"
        placeholder="Email *"
        autoComplete="email"
      />

      <textarea
        name="message"
        className="form-input"
        placeholder="Your message *"
        required
      />
      <Button type="submit" disabled={loading} className="form-btn">
        {buttonText}
      </Button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
export default Form;
