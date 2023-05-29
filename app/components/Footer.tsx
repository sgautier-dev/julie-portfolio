"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsArrowUpSquare } from "react-icons/bs";

function Footer() {
	const today = new Date();
	const year = today.getFullYear().toString();

	return (
		<>
			<div className="flex flex-col gap-3 icons">
				{/* <Link
					href="https://fr-fr.facebook.com/juliegautierofficiel/"
					className="text-center hover:opacity-50"
					target="_blank"
					aria-label="facebook account of Julie Gautier"
				>
					<BsFacebook className="" />
				</Link> */}

				<Link
					href="https://www.instagram.com/JulieGautier.Watertales/"
					className="text-center hover:opacity-50"
					target="_blank"
					aria-label="instagram account of Julie Gautier"
				>
					<BsInstagram className="text-slate-900 dark:text-slate-50" />
				</Link>

				<Link
					href="https://www.youtube.com/@juliegautierofficial/"
					className="text-center hover:opacity-50"
					target="_blank"
					aria-label="youtube channel of Julie Gautier"
				>
					<BsYoutube className="text-slate-900 dark:text-slate-50" />
				</Link>
			</div>
			<div className="flex justify-between items-center text-sm p-3 ">
				<p className="" translate="no">
					Copyright &copy; <span>{year}</span>
				</p>
				<Link href="https://www.sgautier.dev/" target="_blank">
					<p translate="no">Designed by SG</p>
				</Link>
				<a href="#top" aria-label="back to top">
					<BsArrowUpSquare className="text-2xl" />
				</a>
			</div>
		</>
	);
}
export default Footer;
