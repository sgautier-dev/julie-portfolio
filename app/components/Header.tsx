"use client";

import Link from "next/link";
import { League_Spartan } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
	// variable: '--font-title'
});

function Header() {
	return (
		<header
			className={`border-solid border-4 border-yellow-200 sticky top-0 z-0 flex items-center justify-between space-x-2 py-3 ${leagueSpartan.className}`}
		>
			<div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl pl-2 md:pl-3 lg:pl-4">
				<h1>
					JULIE <br /> GAUTIER
				</h1>
			</div>
			<div className="border-solid border-4 border-yellow-200 flex flex-col gap-6 md:gap-7 lg:gap-8 mt-2">
				<button className="rotate-90 text-2xl md:text-3xl lg:text-4xl border-b-2 border-slate-900 text-center hover:opacity-50 leading-none">
					menu
				</button>
				<div className="flex flex-col gap-2  text-xs ">
					<Link
						href="https://fr-fr.facebook.com/juliegautierofficiel/"
						className="text-center hover:opacity-50"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebook} className="icon" />
					</Link>

					<Link
						href="https://www.instagram.com/juliegautier.nery/"
						className="text-center hover:opacity-50"
						target="_blank"
					>
						<FontAwesomeIcon icon={faInstagram} className="icon" />
					</Link>

					<Link
						href="https://www.youtube.com/@juliegautierofficial/"
						className="text-center hover:opacity-50"
						target="_blank"
					>
						<FontAwesomeIcon icon={faYoutube} className="icon" />
					</Link>
				</div>
			</div>
		</header>
	);
}
export default Header;
