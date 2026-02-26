import "./accountNumbers.css";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { bankAccounts } from "./data/bankAccount";

export default function AccountPopup({ onClose }) {
	const [copiedId, setCopiedId] = useState(null);
	const accounts = bankAccounts;
	const popupRef = useRef(null);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === "Escape") {
				onClose();
			}
		}

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	useEffect(() => {
		const popupEl = popupRef.current;
		if (!popupEl) return;

		const focusable = popupEl.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (first) {
			first.focus();
		}

		function handleTrap(event) {
			if (event.key !== "Tab" || focusable.length === 0) return;

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}

		popupEl.addEventListener("keydown", handleTrap);
		return () => popupEl.removeEventListener("keydown", handleTrap);
	}, []);

	const handleCopy = (text, id) => {
		if (!text || text === "-") return;

		navigator.clipboard.writeText(text.trim());
		setCopiedId(id);

		setTimeout(() => setCopiedId(null), 2000);
	};
	return (
		<div className="overlay">
			<button
				type="button"
				className="overlay-close"
				onClick={onClose}
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						onClose();
					}
				}}
				aria-label="Close dialog"
			/>
			<div
				className="popup"
				ref={popupRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="account-numbers-title"
			>
				<h2 id="account-numbers-title">Bank Account Numbers</h2>
				<button type="button" className="close-btn" onClick={onClose}>
					<IoCloseSharp className="close" />
				</button>

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
								const val = acc.accounts[currency];
								const id = `${rowIndex}-${currency}`;
								const isAvailable = val && val !== "-";
								return (
									<div
										key={id}
										className="bank-number-cell"
										data-label={currency}
									>
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
