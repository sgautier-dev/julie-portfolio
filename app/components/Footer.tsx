"use client";

import Link from "next/link";

function Footer() {
	const today = new Date();
	const year = today.getFullYear().toString();

	return (
		<div className="flex justify-between text-sm ">
			<p className="">
				Copyright &copy; <span>{year}</span>
			</p>
            <Link href="https://www.sgautier.dev/" target="_blank">
                <p>Credits SG</p>
            </Link>
            <a href="#top"><p>back to top</p></a>
		</div>
	);
}
export default Footer;
