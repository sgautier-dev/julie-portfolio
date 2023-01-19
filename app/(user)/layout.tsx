import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white border-solid border-2 border-indigo-600">
				<Header />
				{children}
			</body>
		</html>
	);
}
