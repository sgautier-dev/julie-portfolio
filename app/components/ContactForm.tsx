"use client";
import sendEmail from "@/lib/sendEmail";
import Reaptcha from "reaptcha";
import { useState, useRef } from "react";

function ContactForm() {
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const captchaRef = useRef<Reaptcha | null>(null);

	const verify = () => {
		if (captchaRef.current) {
			captchaRef.current.getResponse().then((res: string | null) => {
				setCaptchaToken(res);
			});
		}
	};

	return (
		<>
			<form
				className="text w-full flex flex-col gap-3"
				id="contactForm"
				onSubmit={(event) => {
					event.preventDefault();
					sendEmail(captchaToken);
				}}
			>
				<label htmlFor="name">NAME*</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="your name"
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></input>
				<label htmlFor="email">EMAIL* </label>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="your email"
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></input>
				<label htmlFor="message">MESSAGE*</label>
				<textarea
					name="message"
					id="message"
					placeholder="your message"
					required
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></textarea>
				<Reaptcha
					sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY}
					ref={captchaRef}
					onVerify={verify}
				></Reaptcha>
				<button
					className="w-1/3 rounded-lg border border-solid border-slate-900 bg-slate-50 dark:bg-slate-900 p-2 text-center hover:bg-slate-200 dark:border-slate-50 ml-auto sm:w-1/4 disabled:cursor-not-allowed"
					id="submitButton"
				>
					SEND
				</button>
			</form>
		</>
	);
}

export default ContactForm;
