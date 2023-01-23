import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan({ 
	subsets: ["latin"],
	// variable: '--font-title' 
});

function Header() {
	return (
		<header className={`sticky top-0 z-0 flex items-center justify-between space-x-2 py-3 ${leagueSpartan.className}`}>
			<div className="text-7xl md:text-8xl lg:text-9xl pl-2 md:pl-3 lg:pl-4">
				<h1 >
					JULIE <br /> GAUTIER
				</h1>
			</div>
			<div className="rotate-90 text-2xl md:text-3xl lg:text-4xl border-b-2 border-slate-900 text-center hover:opacity-50 leading-none">
				<button className="">menu</button>
			</div>
		</header>
	);
}
export default Header;
