// components/EmailTemplate.tsx
import React from "react"

interface EmailTemplateProps {
	firstName: string
	lastName: string
	senderEmail: string
	phone: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
	lastName,
	senderEmail,
	phone,
	message,
}) => (
	<div>
		<h1>Formulaire de contact Baüca</h1>
		<p>
			<strong>Prénom :</strong> {firstName}
		</p>
		<p>
			<strong>Nom :</strong> {lastName}
		</p>
		<p>
			<strong>Email :</strong> {senderEmail}
		</p>
		<p>
			<strong>Téléphone :</strong> {phone}
		</p>
		<p>
			<strong>Message :</strong> {message}
		</p>
	</div>
)
