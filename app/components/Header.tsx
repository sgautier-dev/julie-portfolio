"use client";

import Link from "next/link";
import { League_Spartan } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { BsFacebook } from "react-icons/bs";

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
				<h2 className="vertical text-center leading-[40px] md:leading-[60px] lg:leading-[80px] hidden">
					BIO
				</h2>
			</div>
			<div className="flex flex-col space-y-2 lg:space-y-2 ">
				<button className="vertical text-2xl md:text-3xl lg:text-4xl border-l-2 border-slate-900 text-center hover:opacity-50 leading-[20px] md:leading-[30px] lg:leading-[30px]">
					<p className="vertical border-l-2">menu</p>
				</button>
				
				<Link
					href="https://fr-fr.facebook.com/juliegautierofficiel/"
					className="text-center hover:scale-90"
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
		</header>
	);
}
export default Header;
