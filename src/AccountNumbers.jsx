import "./accountNumbers.css";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function AccountPopup({ onClose }) {
	const [copiedId, setCopiedId] = useState(null);
	const accounts = [
		{
			bank: "Inecobank",
			USD: import.meta.env.VITE_INECO_USD,
			EUR: import.meta.env.VITE_INECO_EUR,
			RUB: import.meta.env.VITE_INECO_RUB,
			AMD: import.meta.env.VITE_INECO_AMD,
		},
		{
			bank: "Swift Code",
			USD: import.meta.env.VITE_SWIFT_USD,
			EUR: import.meta.env.VITE_SWIFT_EUR,
			RUB: "-",
			AMD: "-",
		},
	];
	const handleCopy = (text, id) => {
		if (!text || text === "-") return;

		navigator.clipboard.writeText(text.trim());
		setCopiedId(id);

		setTimeout(() => setCopiedId(null), 2000);
	};
	return (
		<div className="overlay">
			<div className="popup">
				<button type="button" className="close-btn" onClick={onClose}>
					<IoCloseSharp className="close" />
				</button>
				<h2>Bank Account Numbers</h2>

				<div className="bank-number-table">
					<div className="bank-number-header">Bank</div>
					<div className="bank-number-header">USD</div>
					<div className="bank-number-header">EUR</div>
					<div className="bank-number-header">RUB</div>
					<div className="bank-number-header">AMD</div>

					{accounts.map((acc, rowIndex) => (
						<div className="bank-number-row" key={acc.bank}>
							<div className="bank-name">{acc.bank}</div>

							{["USD", "EUR", "RUB", "AMD"].map((currency) => {
								const val = acc[currency];
								const id = `${rowIndex}-${currency}`;
								const isAvailable = val && val !== "-";
								return (
									<div key={id} className="bank-number-cell">
										{isAvailable ? (
											<button
												type="button"
												className={`copy-btn ${copiedId === id ? "copied" : ""}`}
												onClick={() => handleCopy(val, id)}
												aria-label={`Copy ${acc.bank} ${currency} account number`}
											>
												<span className="account-val">{val}</span>
												{copiedId === id && (
													<span className="tooltip" aria-live="polite">
														Copied!
													</span>
												)}
											</button>
										) : (
											<span className="empty-val">-</span>
										)}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
