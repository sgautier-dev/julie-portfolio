// components/EmailTemplate.tsx
import React from "react"

interface EmailTemplateProps {
	name: string
	senderEmail: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	senderEmail,
	message,
}) => (
	<div>
		<h1>Formulaire de contact Julie Portfolio</h1>
		<p>
			<strong>Nom :</strong> {name}
		</p>
		<p>
			<strong>Email :</strong> {senderEmail}
		</p>
		<p>
			<strong>Message :</strong> {message}
		</p>
	</div>
)
