"use client"

import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { X } from "lucide-react"

type Variant = "success" | "error" | "info"

interface NotificationProps {
	show: boolean
	onClose: () => void
	title: string
	message: string
	variant?: Variant
}

function getVariantStyles(variant: Variant) {
	switch (variant) {
		case "success":
			return {
				icon: (
					<CheckCircle
						className="size-6 text-green-400"
						aria-hidden="true"
					/>
				),
				bgColor: "bg-white",
				textColor: "text-gray-900",
			}
		case "error":
			return {
				icon: (
					<AlertTriangle
						className="size-6 text-red-400"
						aria-hidden="true"
					/>
				),
				bgColor: "bg-white",
				textColor: "text-gray-900",
			}
		default:
			return {
				icon: (
					<CheckCircle
						className="size-6 text-blue-400"
						aria-hidden="true"
					/>
				),
				bgColor: "bg-white",
				textColor: "text-gray-900",
			}
	}
}

export default function Notification({
	show,
	onClose,
	title,
	message,
	variant = "info",
}: NotificationProps) {
	const [internalShow, setInternalShow] = useState(show)

	useEffect(() => {
		setInternalShow(show)
	}, [show])

	const { icon, bgColor, textColor } = getVariantStyles(variant)

	return (
		<div
			aria-live="assertive"
			className="pointer-events-none fixed z-50 inset-0 flex place-items-center"
		>
			<div className="flex w-full flex-col items-center space-y-4 ">
				<Transition
					show={internalShow}
					enter="transition ease-out duration-300 transform"
					enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
					enterTo="translate-y-0 opacity-100 sm:translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 ${bgColor}`}
					>
						<div className="p-4">
							<div className="flex items-start">
								<div className="shrink-0">{icon}</div>
								<div className="ml-3 w-0 flex-1 pt-0.5">
									<p className={`text-sm font-medium ${textColor}`}>{title}</p>
									<p className="mt-1 text-sm text-gray-500">{message}</p>
								</div>
								<div className="ml-4 flex shrink-0">
									<button
										type="button"
										onClick={() => {
											setInternalShow(false)
											onClose()
										}}
										className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span className="sr-only">Close</span>
										<X aria-hidden="true" className="size-5" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	)
}
