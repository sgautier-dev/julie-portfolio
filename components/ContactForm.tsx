"use client"

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useAction } from "next-safe-action/hooks"
import sendEmail from "@/actions/sendEmail"
import { Loader2 } from "lucide-react"
import { DisplayServerActionResponse } from "./DisplayServerActionResponse"

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const formRef = useRef<HTMLFormElement>(null)
	const { execute, result, isExecuting } = useAction(sendEmail)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		// honeypot field
		const fd = new FormData(formRef.current!)
		const contact_info = (fd.get("contact_info") as string) || ""

		execute({ ...formData, contact_info })
	}

	useEffect(() => {
		if (!isExecuting && result.data?.message) {
			if (formRef.current) {
				formRef.current.reset() // Reset form if success
			}
			setFormData({
				name: "",
				email: "",
				message: "",
			})
		}
	}, [isExecuting, result])
	return (
		<>
			<form
				className="text w-full flex flex-col gap-3"
				id="contactForm"
				ref={formRef}
				onSubmit={handleSubmit}
			>
				<label htmlFor="name">NAME*</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="your name"
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></input>
				<label htmlFor="email">EMAIL* </label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="your email"
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></input>
				<label htmlFor="message">MESSAGE*</label>
				<textarea
					name="message"
					id="message"
					placeholder="your message"
					value={formData.message}
					onChange={handleChange}
					required
					className="bg-slate-50 dark:bg-slate-900 border-b border-solid border-slate-900 p-3 dark:border-slate-50"
				></textarea>

				{/* Honeypot anti-bot */}
				<input
					type="text"
					name="contact_info"
					className="hidden"
					tabIndex={-1}
					autoComplete="off"
				/>

				<button
					className="w-1/3 rounded-lg border border-solid border-slate-900 bg-slate-50 dark:bg-slate-900 p-2 text-center hover:bg-slate-200 dark:border-slate-50 ml-auto sm:w-1/4 disabled:cursor-not-allowed"
					id="submitButton"
				>
					{isExecuting ? <Loader2 className="h-5 w-5 animate-spin" /> : "SEND"}
				</button>
				<DisplayServerActionResponse result={result} />
			</form>
		</>
	)
}

export default ContactForm
