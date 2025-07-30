"use server"
import React from "react"
import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"
import { actionClient } from "@/lib/safe-action"
import { flattenValidationErrors } from "next-safe-action"
import { checkArcJetProtection } from "@/lib/arcjet-protection"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
	name: z.string().min(1, { message: "Name is required." }),
	email: z.string().email({ message: "Invalid email." }),
	message: z.string().min(1, { message: "Message is required." }),
})

const sendEmail = actionClient
	.schema(schema, {
		handleValidationErrorsShape: async (ve) =>
			flattenValidationErrors(ve).fieldErrors,
	})
	.action(async ({ parsedInput: { name, email, message } }) => {
		//throw new Error ('test')

		await checkArcJetProtection()

		await resend.emails.send({
			from: "Julie Portfolio <onboarding@resend.dev>", // onboarding@resend.dev for resend temp address
			to: ["hellojuliegautier@gmail.com"],
			replyTo: email as string,
			subject: `Message de ${name}`,
			react: React.createElement(EmailTemplate, {
				name: name as string,
				senderEmail: email as string,
				message: message as string,
			}),
		})

		return {
			message: "Your message has been sent!",
		}
	})

export default sendEmail
