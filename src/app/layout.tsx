import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MuiProvider } from "@/providers/mui/Mui.provider";
import { NotistackProvider } from "@/providers/notistack/Notistack.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dog food calculator",
	description:
		"Created special for Андрей 'Череп' Черевко from 226 навчальна група",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<MuiProvider>
					<NotistackProvider>{children}</NotistackProvider>
				</MuiProvider>
			</body>
		</html>
	);
}

