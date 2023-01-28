"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsArrowUpSquare } from "react-icons/bs";

function Footer() {
	const today = new Date();
	const year = today.getFullYear().toString();

	return (
		<>
			<div className="flex flex-col gap-3 icons">
				<Link
					href="https://fr-fr.facebook.com/juliegautierofficiel/"
					className="text-center hover:opacity-50"
					target="_blank"
				>
					<BsFacebook className="" />
				</Link>

				<Link
					href="https://www.instagram.com/juliegautier.nery/"
					className="text-center hover:opacity-50"
					target="_blank"
				>
					<BsInstagram className="" />
				</Link>

				<Link
					href="https://www.youtube.com/@juliegautierofficial/"
					className="text-center hover:opacity-50"
					target="_blank"
				>
					<BsYoutube className="" />
				</Link>
			</div>
			<div className="flex justify-between items-center text-sm p-3 ">
				<p className="">
					Copyright &copy; <span>{year}</span>
				</p>
				<Link href="https://www.sgautier.dev/" target="_blank">
					<p>Credits SG</p>
				</Link>
				<a href="#top" className="">
					<BsArrowUpSquare className="text-2xl" />
				</a>
			</div>
		</>
	);
}
export default Footer;
