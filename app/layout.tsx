import "@styles/globals.css";
import type { Metadata } from "next";

import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lasles VPN",
	description: "Next JS Lasles VPN",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
