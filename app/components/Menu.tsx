function Menu() {
	return (
		<div>
			<button
				id="hamburger-button"
				className="relative h-8 w-8 cursor-pointer text-3xl lg:hidden"
				aria-label="bouton menu"
			>
				<span className="absolute top-4 right-0 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></span>
			</button>
			<nav
				className="hidden space-x-8 text-xl lg:block"
				aria-label="menu desktop"
			>
				<a href="#bio" className="hover:opacity-90">
					BIO
				</a>
				<a href="#work" className="hover:opacity-90">
					WORK
				</a>
				<a href="#contact" className="hover:opacity-90">
					CONTACT
				</a>
			</nav>
		</div>
	);
}
export default Menu;
