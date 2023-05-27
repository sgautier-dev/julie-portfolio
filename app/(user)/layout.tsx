import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local';

const quicksand = Quicksand({
	subsets: ["latin"],
	display: 'swap',
	variable: '--font-quicksand'
});

const gistesy = localFont({
	src: '../fonts/Gistesy.ttf',
	display: 'swap',
	variable: '--font-gistesy'
  });

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
			<body className={`min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white ${quicksand.variable} ${gistesy.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
