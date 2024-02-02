"use client";
import "../../lib/scrollAnimations";

function Header() {
	//toggling menu on click
	const toggleMenu = () => {
		const hamburgerBtn = document.getElementById("hamburger-button")!;
		const mobileMenu = document.getElementById("menu")!;
		const header = document.getElementById("header")!;

		header.classList.toggle("z-0");
		header.classList.toggle("z-40");

		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("flex");
		hamburgerBtn.classList.toggle("toggle-btn");
	};

	return (
		<header
			className="sticky top-0 z-0 flex items-center justify-between space-x-2 p-3 font-leagueSpartan"
			id="header"
		>
			<h1 className="title pb-2 md:pb-3 xl:pb-4 pl-2 md:pl-3 lg:pl-4 transition-transform">
				<span className="item block" translate="no">
					JULIE
				</span>
				<span className="item block" translate="no">
					GAUTIER
				</span>
			</h1>
			<span
				className="font-gistesy text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
				translate="no"
			>
				WaterTales
			</span>

			<div className="flex flex-col space-y-2 lg:space-y-2 ">
				{/* <button className="vertical text-2xl md:text-3xl lg:text-4xl border-l-2 border-slate-900 text-center hover:opacity-50 leading-[20px] md:leading-[30px] lg:leading-[30px]">
					<p className="vertical border-l-2">menu</p>
				</button> */}
				<button
					id="hamburger-button"
					className="relative h-8 w-8 cursor-pointer text-3xl md:text-4xl lg:text-5xl mb-2"
					aria-label="menu button"
					onClick={toggleMenu}
				>
					<span className="absolute top-4 right-0 -mt-0.5 h-1 w-8 rounded hover:opacity-50 bg-slate-900 dark:bg-slate-50 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-900 before:dark:bg-slate-50 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-900 after:dark:bg-slate-50 after:transition-all after:duration-500 after:content-['']"></span>
				</button>
				<div
					id="menu"
					className=" absolute top-36 md:top-48 lg:top-60 left-0 hidden w-full origin-bottom animate-open-menu flex-col bg-slate-900 dark:bg-slate-50
					 text-3xl md:text-4xl lg:text-5xl rounded-lg"
					onClick={toggleMenu}
				>
					<nav
						className="flex min-h-screen flex-col items-center py-8 text-slate-50 dark:text-slate-900"
						aria-label="menu"
					>
						<a
							href="/#julie"
							className="w-full py-6 text-center hover:opacity-70"
						>
							Julie
						</a>
						<a
							href="/#work"
							className="w-full py-6 text-center hover:opacity-70"
						>
							Work
						</a>
						<a
							href="/#contact"
							className="w-full py-6 text-center hover:opacity-70"
						>
							Contact
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}
export default Header;
