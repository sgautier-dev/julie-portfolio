import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Quicksand, League_Spartan } from "next/font/google";
import localFont from 'next/font/local';

const quicksand = Quicksand({
	subsets: ["latin"],
	display: 'swap',
	variable: '--font-quicksand'
});

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
	display: 'swap',
	variable: '--font-leagueSpartan'
});

const gistesy = localFont({
	src: '../fonts/Gistesy.ttf',
	display: 'swap',
	variable: '--font-gistesy'
  });

  export const metadata = {
	title: "Julie Gautier Official Site - Water Tales",
	description: "Julie Gautier Water Tales, Freediving Underwater Film Director, Creator of Aquaflow",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="sm:scroll-smooth">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white ${quicksand.variable} ${leagueSpartan.variable} ${gistesy.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
