"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

export default function VideoPlayer() {
	const playerRef = useRef<any>(null)
	const [muted, setMuted] = useState(true)

	useEffect(() => {
		// Load YouTube IFrame API
		const tag = document.createElement("script")
		tag.src = "https://www.youtube.com/iframe_api"
		tag.async = true
		tag.onerror = () => {
			console.error("YouTube IFrame API failed to load.")
		}
		document.body.appendChild(tag)

		// Initialize player when API is ready
		;(window as any).onYouTubeIframeAPIReady = () => {
			playerRef.current = new (window as any).YT.Player("ytplayer", {
				events: {
					onReady: () => {
						playerRef.current?.mute()
					},
				},
			})
		}

		return () => {
			delete (window as any).onYouTubeIframeAPIReady
		}
	}, [])

	const toggleMute = () => {
		const player = playerRef.current
		if (!player) return
		if (muted) {
			player.unMute()
			setMuted(false)
		} else {
			player.mute()
			setMuted(true)
		}
	}

	return (
		<div className="relative w-full h-0 pb-[56.25%]">
			<iframe
				id="ytplayer"
				className="absolute top-0 left-0 w-full h-full"
				src="https://www.youtube.com/embed/gLpjV3drv1I?enablejsapi=1&controls=0&loop=1&playlist=gLpjV3drv1I&autoplay=1&modestbranding=1"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>

			<button
				onClick={toggleMute}
				aria-label={muted ? "Unmute video" : "Mute video"}
				className="absolute bottom-1 sm:bottom-2 lg:bottom-4 right-40 p-2 bg-white bg-opacity-75 rounded-full shadow"
			>
				{muted ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-4 h-4 sm:w-6 sm:h-6"
					>
						<path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
						{/* Cross icon in front of speaker */}
						<path
							d="M16 8l4 4M20 8l-4 4"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-4 h-4 sm:w-6 sm:h-6"
					>
						<path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
						<path
							d="M14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.89-.5 9-4.71 9-8.77s-4.11-8.27-9-8.77z"
							fill="currentColor"
						/>
					</svg>
				)}
			</button>
		</div>
	)
}
