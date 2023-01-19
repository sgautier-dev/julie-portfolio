function Header() {
	return (
		<header className="sticky top-0 z-0 flex items-center justify-between space-x-2 px-3 py-3">
			<div>
				<h1 className="text-8xl lg:text-9xl">
					Julie <br /> Gautier
				</h1>
			</div>
			<div>
				<button className="px-4 py-2 bg-slate-900 text-slate-50 rounded-full text-center rotate-90">Menu</button>
			</div>
		</header>
	);
}
export default Header;
